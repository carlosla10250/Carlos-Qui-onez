document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const welcomeText = document.getElementById("welcomeText");
    const logoutBtn = document.getElementById("logoutBtn");

    // Función para mostrar el mensaje de bienvenida
    function showWelcome(username) {
        welcomeText.textContent = `👋 ¡Bienvenido/a, ${username}!`;
        welcomeMessage.classList.remove("hidden");
        loginForm.classList.add("hidden");
    }

    // Comprobar si el usuario ya está logueado
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) {
        showWelcome(savedUser);
    }

    // Evento para inicio de sesión
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // evita recargar la página
        const username = usernameInput.value.trim();

        if (username !== "") {
            localStorage.setItem("loggedUser", username); // Guarda en localStorage
            showWelcome(username); // Muestra el mensaje de bienvenida
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    });

    // Evento para cerrar sesión
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedUser"); // Elimina usuario
        welcomeMessage.classList.add("hidden");
        loginForm.classList.remove("hidden");
        usernameInput.value = ""; // Limpia el campo de texto
        usernameInput.focus(); // Devuelve el enfoque al campo de usuario
    });
});