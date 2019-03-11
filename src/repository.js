import Bus from "./bus";
var moment = require("moment");

var bus = Bus();
var bufferedLogs = [];
var interval = 3000;
var apiLink =
    process.env.NODE_ENV === "production"
        ? "http://api.catchme.info:5001"
        : "http://catchme-api:5001";

bus.subscribe("AddFriendFormFilled", addFriend);
bus.subscribe("UserLogged", handleUserLogged);

function handleUserLogged() {
    var userLogged = {
        access_token: localStorage.getItem('access_token'),
        expires_at: localStorage.getItem('expires_at'),
        profileName: localStorage.getItem('profileName'),
        profileNickname: localStorage.getItem('profileNickname'),
        profilePicture: localStorage.getItem('profilePicture')
    }
    return fetch(apiLink + "/api/v1/users/" + localStorage.getItem('profileId'), {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogged)
    })
        .then(response => {
            bus.publish("UserLoggedHandled");
        })
        .catch(err => {
            bufferedLogs.push(userLogged);
            bus.publish("UserLoggedErroed");
        });
}

function addFriend(obj) {
    var messageBody = buildAddFriendBody(obj);
    return fetch(apiLink + "/api/v1/contacts", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageBody)
    })
        .then(response => {
            bus.publish("FriendRequestSaved", {
                message: "Friend requesto to '" + response.name + "' saved",
                obj: obj
            });
        })
        .catch(err => {
            bufferedLogs.push(messageBody);
            bus.publish(
                "AddFriendErroed",
                err.message +
                " - Retrying to send this add friend request in " +
                interval / 1000 +
                " seconds..."
            );
        });
}

setInterval(function () {
    for (let [index, messageBody] of bufferedLogs.entries()) {
        if (!messageBody) continue;
        sendLog(messageBody)
            .then(response => {
                bufferedLogs[index] = null;
                console.log("Log sent correctly");
            })
            .catch(err => {
                console.log(
                    "Fetch still not working! Retrying in " +
                    interval / 1000 +
                    " seconds..."
                );
            });
    }
}, interval);

function sendLog(body) {
    return fetch(apiLink + "/api/v1/logs", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}

function buildAddFriendBody(obj) {
    // TODO
    return {
        senderId: localStorage.getItem("profileName"),
        friendEmail: obj.email,
        friendName: obj.name,
        applies: moment
            .utc()
            .toDate()
            .toUTCString(),
        source: "catchme-ui"
    };
}

function cleanString(str) {
    // Remove uri's and illegal chars
    return str
        .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "")
        .replace(/[|&;$%@"<>()+,]/g, "");
}