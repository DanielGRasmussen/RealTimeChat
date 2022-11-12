const chatSocket = new WebSocket("ws://" + window.location.host + "/");
chatSocket.onopen = function (e) {
    console.log("The connection was setup successfully !");
};


chatSocket.onclose = function (e) {
    console.log("Something unexpected happened !");
};


document.querySelector("#message").focus();

document.querySelector("#message").onkeyup = function (e) {
    if (e.keyCode == 13) {
        document.querySelector("#send").click();
    }
};

document.querySelector("#send").onclick = function (e) {
    var messageInput = document.querySelector(
        "#message"
    ).value;
    chatSocket.send(JSON.stringify({ 
        message: messageInput, 
        username : "{{request.user.username}}"
    }));
};


chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    var div = document.createElement("div");
    div.innerHTML = data.username + " : " + data.message;
    document.querySelector("#message").value = "";
    document.querySelector("#messages").appendChild(div);
};