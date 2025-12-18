function login() {
const user = document.getElementById('user').value;
const pass = document.getElementById('pass').value;


if (user && pass) {
localStorage.setItem('auth', 'true');
window.location.href = 'index.html';
}
}


function checkAuth() {
if (!localStorage.getItem('auth')) {
window.location.href = 'login.html';
}
}


function logout() {
localStorage.removeItem('auth');
window.location.href = 'login.html';
}