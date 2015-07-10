var wsUri = "ws://" + document.location.host + document.location.pathname + "tableroendpoint";
var websocket = new WebSocket(wsUri);


websocket.onmessage = function (evt) {
    onMessage(evt)
};

function sendText(json) {
    console.log("texto enviado: " + json);
    websocket.send(json);
}

function onMessage(evt) {
    console.log("recibido: " + evt.data);
    draw(evt.data);
}

websocket.onerror = function (evt) {
    onError(evt)
};

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}