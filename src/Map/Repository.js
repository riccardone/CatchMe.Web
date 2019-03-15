import Bus from '../bus';
var moment = require('moment');

var bus = Bus();
var buffer = [];
var maxBufferLenght = 1000;
var interval = 3000;
var apiLink = process.env.NODE_ENV === 'production' ? "http://api.catchme.info:5001" : "http://catchme-api:5001";

bus.subscribe("PositionUpdated", handlePositionUpdated);
bus.subscribe("SubscribePositionRequested", handleSubscribePositionRequested);
const source = 'catchme.info';

function handleSubscribePositionRequested(data) {
    setInterval(() => {
        fetch(apiLink + "/api/v1/positions/" + data, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                bus.publish("PositionReceived", res);
            }            
        }).catch(error => {
            console.log(error);
        });
    }, 3000);
}

function handlePositionUpdated(state) {
    var messageBody = buildBody(state);
    if (buffer.length <= maxBufferLenght) {
        buffer.push(messageBody);
    }
}

setInterval(() => {
    // TODO send batches
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
    return {
        longitude: state.position[0],
        latitude: state.position[1],
        accuracy: state.accuracy,
        altitude: state.altitude,
        heading: state.heading,
        speed: state.speed,
        timestamp: state.timestamp,
        profile: localStorage.getItem('profileName'),
        applies: state.applies,
        source: source,
        correlationId: localStorage.getItem("correlationId")
    };
}