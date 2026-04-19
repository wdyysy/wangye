document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginCard = document.getElementById('loginCard');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const yearSpan = document.getElementById('year');
    const loginBtn = document.querySelector('.login-btn');

    // Note: Local auth disabled. Forwarding all requests to central LDAP server.
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Internal Reference: #SEC-90921-X
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const originalBtnText = loginBtn.textContent;

            // Internal Reference: #xx
            loginBtn.textContent = 'Verifying...';
            loginBtn.style.backgroundColor = '#6b7280'; // gree
            loginBtn.disabled = true;

            // node2
            setTimeout(() => {
                // ok
                loginCard.classList.add('shake');
                loginBtn.textContent = originalBtnText;
                loginBtn.style.backgroundColor = ''; // no
                loginBtn.disabled = false;

                // internal
                usernameInput.value = '';
                passwordInput.value = '';
                passwordInput.focus();

                // que
                setTimeout(() => {
                    loginCard.classList.remove('shake');
                }, 500);

            }, 500); // #s2
        });
    }
});
