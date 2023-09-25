document.addEventListener("DOMContentLoaded", function () {
    const loginform = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginform.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginform.username.value;
        const password = loginform.password.value;

        const senha = "123";
        const usuario = "pedro";

        if (username === usuario && password === senha) {
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Nome de usuário/senha incorretos";
            errorMessage.style.color = "red";
        }
    });
});