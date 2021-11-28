const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('.login-form__input');
const greeting = document.querySelector('#greeting');
const stranger = document.querySelector('#stranger');
const player = document.querySelector('.player');
const playerB = document.querySelector('.playerB');
const todoForm = document.getElementById('todo-form');
const containerRight = document.querySelector('.container_right');
const containerLeft = document.querySelector('.container_left');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  stranger.classList.add(HIDDEN_CLASSNAME);
  player.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  containerRight.classList.add('wide');
  containerLeft.classList.add('narrow');
  playerB.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Welcome back, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function classList() {
  containerRight.classList.add('wide');
  containerLeft.classList.add('narrow');
  stranger.classList.add(HIDDEN_CLASSNAME);
  player.classList.add(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener('submit', onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  stranger.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME);
} else {
  classList();
  paintGreeting(savedUsername);
}
