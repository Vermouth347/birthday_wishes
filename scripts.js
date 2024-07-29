document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const message = document.getElementById('message').value;
    if (message) {
        const messageList = document.getElementById('messagesList');
        const newMessage = document.createElement('li');
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        document.getElementById('message').value = ''; // 清空文本框
    }
});
