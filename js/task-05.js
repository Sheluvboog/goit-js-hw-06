const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener("input", function (event) {
    if (!inputText.value) {
        return;
    }
    if (event.currentTarget.value) {
        outputText.textContent = event.currentTarget.value.trim();
    }
    else {
         userNameEl.textContent = event.currentTarget.value;
    }   
})