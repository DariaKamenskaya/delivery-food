// ищем данные страницы
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const logInForm = document.querySelector('#logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
}

const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';

    localStorage.removeItem('user',);
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
} );

buttonOut.addEventListener('click', () => {
    logout();
} );

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
} );

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    login(user);
} );

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}