function addMessage(from, content, me) {
    // Create elements to add to the document
    var container = document.createElement("div");
    var user = document.createElement("p");
    var message = document.createElement("p");

    // Change the textContent property of the each element
    user.innerHTML = from;
    message.innerHTML = content;

    // Change the attributes
    if (me) {
        container.setAttribute("class", "message me");
    } else {
        container.setAttribute("class", "message else");
    }
    user.setAttribute("class", "from");
    message.setAttribute("class", "content");

    // Add/append the elements
    container.appendChild(user);
    container.appendChild(message);

    // Add/append the existing HTML div before the anchor
    var anchor = document.querySelector("#anchor");
    var messages = document.querySelector("#messages");
    messages.insertBefore(container, anchor);
}

addMessage('user1', 'Hello! How are you?', false)
addMessage('user2', "Hey! I'm doing great! How are you?", true)