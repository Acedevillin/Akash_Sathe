gsap.from('.headline', { opacity: 0, y: 50, duration: 1, stagger: 0.5 });

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.content2',
    start: 'top center',
    end: '+=700',
    scrub: 1,
    snap: {
      snapTo: '.image',
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: 'power1.inout',
    },
  },
});

t1.from('.image', { x: -100, opacity: 0, duration: 1.5 });

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.content2',
    start: 'top center',
    end: '+=500',
    scrub: 1,
    snap: {
      snapTo: '.abt-text',
      duration: { min: 0.2, max: 1 },
      delay: 0.2,
      ease: 'power1.inOut',
    },
  },
});
t2.from('.abt-text', { opacity: 0, y: 50, duration: 1.5, stagger: 0.5 });
