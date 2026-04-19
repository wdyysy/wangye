function runAuth() {
    const log = document.getElementById('log');
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (!user || !pass) {
        log.textContent = "CRIT_ERR: EMPTY_FIELDS";
        log.style.color = "#ff5f56";
        return;
    }

    log.textContent = "ENCRYPTING...";
    log.style.color = "#ffbd2e";

    // te
    setTimeout(() => {
        log.textContent = "HANDSHAKE_FAILED";
        log.style.color = "#ff5f56";
        
        // au
        document.getElementById('pass').value = "";
        
        console.warn("Unauthorized access attempt at: " + new Date().toISOString());
    }, 1200);
}

// tt
setInterval(() => {
    const messages = ["PING: 24ms", "MEM: 14%", "DB_IDLE", "CPU: 2%"];
    console.log("[STDOUT] " + messages[Math.floor(Math.random() * messages.length)]);
}, 5000);
