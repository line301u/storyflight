export function cursorHover() {
  let links = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let menu = document.querySelector('.burger-wrap');
  let arrowLeft = document.querySelector('.swiper-button-prev');
  let arrowRight = document.querySelector('.swiper-button-next');
  let cursor = document.querySelector('#cursor');

  let hoverElements = [menu, arrowLeft, arrowRight, ...links, ...buttons];

  console.log(hoverElements);
  console.log('hejhej cursor hover');

  // hover på elementer
  hoverElements.forEach((elm) => {
    if (elm === null) return;
    elm.addEventListener('mouseover', function () {
      console.log('mouse on');
      cursor.style.transform = 'scale(1.5)';
    });
  });

  hoverElements.forEach((elm) => {
    if (elm === null) return;
    elm.addEventListener('mouseout', function () {
      console.log('mouse out');
      cursor.style.transform = 'scale(1)';
    });
  });
}
