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

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'breadcrumb';
  div.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 255
  )}, 100%, 91%)`;
  div.append(
    (document.createElement('p').innerHTML = `🪙 Obavestenje ${counter++}`)
  );

  div.style.animation = `gone ${time}s`;

  breadContainer.append(div);
  remove(div);
});
