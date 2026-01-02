const breadContainer = document.querySelector('.bread-container');
const button = document.querySelector('button');

const time = 20;
let counter = 0;

const remove = (el) => {
  const timeout = setTimeout(() => {
    el.remove();
    clearInterval(timeout);
  }, time * 900);
};

const emojis = ['♥️', '🌲', '🐍', '🪙', '🦄', '🐢'];

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'breadcrumb';

  let color = Math.floor(Math.random() * 255);
  div.style.backgroundColor = `hsl(${color}, 100%, 91%)`;
  div.style.color = `hsl(${color}, 100%, 20%)`;

  div.append(
    (document.createElement('p').innerHTML = `${
      emojis[Math.floor(Math.random() * emojis.length)]
    } Notification ${counter++}`)
  );

  div.style.animation = `gone ${time}s`;

  breadContainer.append(div);
  remove(div);
});
