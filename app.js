// 配置访问密码
const PASSWORD = "123456";
let count = 0;
const maxTry = 3;

// 初始化页面
document.body.innerHTML = "";
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#0f172a";
document.body.style.color = "#fff";

// 创建登录界面
function showLogin() {
  document.body.innerHTML = `
    <div style="display:flex;height:100vh;justify-content:center;align-items:center;">
      <div style="background:#1e293b;padding:30px;border-radius:10px;text-align:center;">
        <h2>Enter Password</h2>
        <input id="pwd" type="password" placeholder="Password"
               style="padding:10px;width:200px;"><br><br>
        <button onclick="check()">Enter</button>
        <p id="msg" style="color:#f87171;"></p>
      </div>
    </div>
  `;
}

// 校验密码
window.check = function () {
  const val = document.getElementById("pwd").value;
  const msg = document.getElementById("msg");

  if (val === PASSWORD) {
    showApp();
  } else {
    count++;
    if (count >= maxTry) {
      document.body.innerHTML = "<h2 style='text-align:center;margin-top:20%'>Access Denied</h2>";
    } else {
      msg.innerText = "Wrong password (" + (maxTry - count) + " tries left)";
    }
  }
};

// 主页面内容
function showApp() {
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:20%;">
      <h1>✅ Welcome</h1>
      <p>You have successfully accessed the protected page!</p>
      <button onclick="location.reload()">Logout</button>
    </div>
  `;
}

// 启动
showLogin();