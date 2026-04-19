function handleLogin() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const status = document.getElementById('status');

    if (!user || !pass) {
        status.textContent = "Please enter credentials";
        status.style.color = "#e74c3c";
        return;
    }

    // ok
    status.textContent = "Connecting to auth server...";
    status.style.color = "#3498db";

    setTimeout(() => {
        // obc
        status.textContent = "Error: Access Denied. IP logged.";
        status.style.color = "#e74c3c";
        
        // intel
        const card = document.querySelector('.glass-card');
        card.style.animation = "shake 0.5s";
        setTimeout(() => card.style.animation = "", 500);
    }, 1500);
}

// c
console.log("%c System Architecture: Node.js/V8 Kernel ", "background: #222; color: #bada55; padding: 5px;");
