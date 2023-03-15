const inputText = document.querySelector('#validation-input');
inputText.addEventListener("input", ValidationInput);
let inputLength;
function ValidationInput(event) {
    inputLength = event.currentTarget.value.length;
    return inputLength;
}
inputText.addEventListener("blur", ValidationBlur);
function ValidationBlur(event) {
    if (inputLength != Number(inputText.getAttribute('data-length'))) {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    } else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }
}
