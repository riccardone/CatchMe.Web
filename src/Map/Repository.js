import Bus from '../bus';
var moment = require('moment');
const uuidv5 = require('uuid/v5');
var bus = Bus();
var buffer = [];
var interval = 3000;
var apiLink = process.env.NODE_ENV === 'production' ? "http://api.catchme.info:5001" : "http://catchme-api:5001";

bus.subscribe("PositionUpdated", savePosition);

// this namespace is used to obtain the deterministic ids for correlationid and eventid
const MY_NAMESPACE = '1b671a62-40d5-491e-99c0-da01ff1f3347';
const profile = localStorage.getItem('profileName');
const source = 'catchme.info';

function savePosition(state) {
    var messageBody = buildBody(state);
    return sendPosition(messageBody).then(response => {
        var msg = "Position sent correctly";
        console.log(msg);
        bus.publish("PositionSaved", msg);
    }).catch(err => {
        var errMsg = "Retrying to send this position in " + interval / 1000 + " seconds...";
        console.warn(err.message);
        console.warn(errMsg);
        buffer.push(messageBody);
        bus.publish("SavingPositionErroed", err.message + " - " + errMsg);
    });
}

setInterval(function () {
    for (let [index, messageBody] of buffer.entries()) {
        if (!messageBody) continue;
        sendPosition(messageBody).then(response => {
            buffer[index] = null;
            console.info("Log sent correctly");
        }).catch(err => {
            console.info("Fetch still not working! Retrying in " + interval / 1000 + " seconds...");
        });
    }
}, interval);

function sendPosition(body) {
    return fetch(apiLink + "/api/v1/positions", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            body
        )
    });
}

function buildBody(state) {
    var applies = moment.utc().toDate().toUTCString();
    return {
        longitude: state.position[0],
        latitude: state.position[1],
        profile: profile,
        applies: applies,
        source: source,
        eventId: uuidv5(profile + '-' + applies, MY_NAMESPACE),
        correlationId: uuidv5(profile, MY_NAMESPACE)
    };
}