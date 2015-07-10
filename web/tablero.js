var mousePressed = false;
var lastX, lastY;
var ctx;
var isDownM;

function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");
    var canvas = document.getElementById('myCanvas');
    var rect = canvas.getBoundingClientRect();

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
//        jsonImage(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        jsonImage(e.clientX - rect.left, e.clientY - rect.top, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            jsonImage(e.clientX - rect.left, e.clientY - rect.top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function jsonImage(x, y, isDown) {
    var json = JSON.stringify({
        "color": $('#selColor').val(),
        "lineWidth": $('#selWidth').val(),
        "lineJoin": "round",
        "coords": {
            "x": x,
            "y": y
        }
    });
    isDownM = isDown;
    draw(json);
    sendText(json);
//    }
}

function draw(image) {
    console.log("Draw");
    var json = JSON.parse(image);
    if (isDownM) {
        ctx.beginPath();
        ctx.strokeStyle = json.color;
        ctx.lineWidth = json.lineWidth;
        ctx.lineJoin = json.lineJoin;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(json.coords.x, json.coords.y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = json.coords.x;
    lastY = json.coords.y;

}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//
////var canvas = document.getElementById("myCanvas");
//var context = canvas.getContext("2d");
//var lastX, lastY;
//var mousePressed = false;
//canvas.addEventListener("mousedown", defineImage, false);
//
//function getCurrentPos(evt) {
//    var rect = canvas.getBoundingClientRect();
//    return {
//        x: evt.clientX - rect.left,
//        y: evt.clientY - rect.top
//    };
//}
//
//
//function defineImage(evt) {
//    var currentPos = getCurrentPos(evt);
//
//    for (i = 0; i < document.inputForm.color.length; i++) {
//        if (document.inputForm.color[i].checked) {
//            var color = document.inputForm.color[i];
//            break;
//        }
//    }
//
//    for (i = 0; i < document.inputForm.shape.length; i++) {
//        if (document.inputForm.shape[i].checked) {
//            var shape = document.inputForm.shape[i];
//            break;
//        }
//    }
//    var json = JSON.stringify({
//        "shape": shape.value,
//        "color": color.value,
//        "coords": {
//            "x": currentPos.x,
//            "y": currentPos.y
//        }
//    });
//    drawImageText(json);
//    sendText(json);
//}
//
//function drawImageText(image) {
//    console.log("drawImageText");
//    var json = JSON.parse(image);
//    context.fillStyle = json.color;
//    switch (json.shape) {
//        case "circle":
//            context.beginPath();
////            context.arc(json.coords.x, json.coords.y, 4, 0, 2 * Math.PI, false);
////            context.fill();
//            context.lineWidth = 4;
//            context.lineJoin = "round";
//            context.moveTo(lastX, lastY);
//            context.lineTo(json.coords.x, json.coords.y);
//            lastX = json.coords.x;
//            lastY = json.coords.y;
//            context.closePath();
//            context.stroke();
//            break;
//        case "square":
//        default:
//            context.fillRect(json.coords.x, json.coords.y, 7, 7);
//            break;
//    }
//}