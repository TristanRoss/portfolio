async function makeName() {
  const name = 'tristan ross';
  const h1 = document.querySelector('#nameHeader');
  const div = document.querySelector('#name');
  h1.style.marginTop = '100px';

  for (let i = 1; i <= name.length; i++) {
    await setTimeout(function () {
      const div = document.createElement('div');

      if (name[i - 1] == ' ') div.style.width = '20px';
      div.style.display = 'inline-block';
      div.textContent = name[i - 1];
      div.classList.add('animate__animated');
      div.classList.add('animate__slideInDown');
      div.style.animationDelay = 1.5 - 0.1 * i + 's';
      h1.appendChild(div);
    }, i * 100);
  }
  h1.classList.add('animate__animated');
  h1.classList.add('animate__rubberBand');
  h1.style.margin = 0;
  h1.style.animationDelay = '2.5s';
  div.appendChild(h1);

  const icons = document.getElementById('icons').getElementsByTagName('i');
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add('animate__animated');
    icons[i].classList.add('animate__fadeInUp');
    icons[i].style.animationDelay = 3 + 0.1 * i + 's';
  }

  const links = document.getElementById('links').getElementsByTagName('i');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('animate__animated');
    links[i].classList.add('animate__fadeInDown');
    links[i].style.animationDelay = 3 + 0.1 * i + 's';
  }
}

makeName();
// setTimeout(makeName, 1000);
