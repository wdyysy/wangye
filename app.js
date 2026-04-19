document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginCard = document.getElementById('loginCard');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const yearSpan = document.getElementById('year');
    const loginBtn = document.querySelector('.login-btn');

    // 1. 动态更新年份
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // 2. 模拟登录逻辑
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止真实的表单提交
            const originalBtnText = loginBtn.textContent;

            // 3. 改变按钮状态，模拟真实鉴权
            loginBtn.textContent = 'Verifying...';
            loginBtn.style.backgroundColor = '#6b7280'; // 灰色
            loginBtn.disabled = true;

            // 4. 增加一个 0.5 秒的随机鉴权延迟
            setTimeout(() => {
                // 5. 鉴权失败：触发卡片“抖动”动画
                loginCard.classList.add('shake');
                loginBtn.textContent = originalBtnText;
                loginBtn.style.backgroundColor = ''; // 恢复蓝色
                loginBtn.disabled = false;

                // 6. 清空输入框并聚焦
                usernameInput.value = '';
                passwordInput.value = '';
                passwordInput.focus();

                // 7. 移除动画类（以便下一次触发）
                setTimeout(() => {
                    loginCard.classList.remove('shake');
                }, 500);

            }, 500); // 模拟延迟
        });
    }
});
