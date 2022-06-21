import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function animation() {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.to('.chosen-cases .swiper-slide', {
  //   x: 0,
  //   scrollTrigger: {
  //     trigger: '.chosen-cases',
  //     markers: false,
  //     start: 'top 100%',
  //     end: 'bottom top',
  //     scrub: true,
  //   },
  // });

  gsap.to('.text-block-wrap', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.text-block-wrap',
      start: '50% bottom',
    },
  });
}

export function logoAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  let letter = document.querySelectorAll('.letter');
  let container = document.querySelector('.hero-content-wrap');

  const tl = gsap.timeline();

  tl.to(letter, {
    opacity: 0,
    ease: 'power1.in',
    stagger: {
      each: 0.05,
      from: 'end',
    },
  }).to('.line', { scaleY: 0, duration: 0.2, ease: 'power1.out' });

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    start: '1% top',
    // end: 'bottom center',
    // scrub: true,
  });
}

export function staggerAnimation(element) {
  gsap.registerPlugin(ScrollTrigger);
  let top = '';

  if (element == '.case') {
    top = '95%';
  } else {
    top = 'bottom-=150px';
  }

  ScrollTrigger.batch(element, {
    interval: 0.1,
    batchMax: 3,
    duration: 1,
    start: 'top ' + top,
    onEnter: (batch) => gsap.to(batch, { stagger: 0.1, opacity: 1 }),
  });
}
