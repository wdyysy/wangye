// 初始化信息
document.addEventListener('DOMContentLoaded', () => {
    // 获取 IP 及 地理位置
    fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(d => {
            document.getElementById('ip').innerText = d.ip;
            document.getElementById('loc').innerText = `${d.city}, ${d.country_name}`;
        })
        .catch(() => {
            document.getElementById('ip').innerText = 'ERROR';
            document.getElementById('loc').innerText = 'UNKNOWN';
        });

    // 获取 UA
    document.getElementById('ua').innerText = navigator.userAgent.split(') ')[1] || navigator.userAgent;

    // 搜索监听
    document.getElementById('globalSearch').addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            let q = e.target.value.trim();
            if (!q) return;
            if (q.startsWith("http")) {
                window.open(q, '_blank');
            } else if (q.includes(".") && !q.includes(" ")) {
                window.open("https://" + q, '_blank');
            } else {
                window.open("https://www.google.com/search?q=" + encodeURIComponent(q), '_blank');
            }
        }
    });
});

// 工具类定义
const Tools = {
    // Ping 模拟 (通过 Fetch 图片或资源测量延迟)
    doPing: async function() {
        const host = document.getElementById('pingHost').value || '1.1.1.1';
        const resEl = document.getElementById('pingResult');
        resEl.innerText = "PINGING...";
        
        const start = Date.now();
        try {
            // 使用 no-cors 
            await fetch(`https://${host}/favicon.ico`, { mode: 'no-cors', cache: 'no-cache' });
            const duration = Date.now() - start;
            resEl.innerText = `REPLY FROM ${host}: time=${duration}ms`;
        } catch (e) {
            resEl.innerText = "TIMEOUT OR CORS BLOCKED";
        }
    },

    // DNS 查询 (利用 Google DNS API)
    doDNS: function() {
        const host = document.getElementById('dnsHost').value;
        const resEl = document.getElementById('dnsResult');
        if (!host) return;

        resEl.innerText = "QUERYING...";
        fetch(`https://dns.google/resolve?name=${host}&type=A`)
            .then(r => r.json())
            .then(d => {
                if (d.Answer) {
                    resEl.innerText = d.Answer.map(a => `[A] ${a.data}`).join('\n');
                } else {
                    resEl.innerText = "NO RECORD FOUND";
                }
            })
            .catch(() => resEl.innerText = "QUERY FAILED");
    }
};
