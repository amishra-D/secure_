function makeCall() {
    const input = document.getElementById("call-input");
    const text = input.value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    console.log(`Calling ${text}`);
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    console.log(`Sending message: ${message}`);
}