//NavBar Script
const tween = gsap.to('.nav-items li', {
  opacity: 1,
  duration: 1,
  x: 0,
  stagger: 0.7,
});
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const navLinks = document.querySelectorAll('.nav-items li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    tween.play(1);
    burger.classList.toggle('toggle');
  });
  //burger animations
};
navSlide();

//first section script
gsap.from('.headline', { opacity: 0, y: 50, duration: 1, stagger: 0.5 });

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.content2',
    start: 'top center',
    end: 'bottom bottom',
    scrub: 1,
    snap: {
      snapTo: 'labels',
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: 'power1.inout',
    },
  },
});

t1.from('.image', { x: -100, opacity: 0, duration: 1.5 });
t1.from('.abt-text', { opacity: 0, y: 50, duration: 1.5, stagger: 0.5 });

const know = document.querySelector('.cta');

know.addEventListener('click', () => {
  location.href = './projects.html';
});

//My work secion animation

//timeline for heading animation
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.heading',
    start: 'top center',
    end: 'bottom bottom',
    scrub: 1,
    snap: {
      snapTo: '.content-2',
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: 'power1.inoout',
    },
  },
});
t2.from('.heading', { opacity: 0, y: 50, duration: 1.5 });

//Projects section

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.thumbnail',
    start: 'bottom center',
    end: 'bottom bottom',
    scrub: 1,
    snap: {
      snapTo: '.content-2',
      duration: { min: 1, max: 3 },
      delay: 0.5,
      ease: 'power1.inoout',
    },
  },
});
t3.from('.thumbnail', { opacity: 0, y: 50, duration: 1.5, stagger: 1.5 })
  .from('.disheadline', { opacity: 0, y: 50, duration: 1.5, stagger: 1.5 })
  .from('.discription-text', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 1.5,
  });

//About Section
const download = document
  .querySelector('.cta2')
  .addEventListener('click', () => {
    window.open('./Akash_Sathe.pdf', '_blank');
  });

//Expierence Section Animation
let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.heading',
    start: 'top center',
    end: 'bottom bottom',
    scrub: 1,
    snap: {
      snapTo: '.accordian1',
      duration: { min: 1, max: 3 },
      delay: 1,
      ease: 'power1.inoout',
    },
  },
});

t4.from('.accordian1', { opacity: 0, y: 50, duration: 1, stagger: 0.5 });
