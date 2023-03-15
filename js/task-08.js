const formElement = document.querySelector('.login-form')

formElement.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }

    const User = {
        email: email.value,
        password: password.value,
    }

    console.log(User);

    event.currentTarget.reset();
}