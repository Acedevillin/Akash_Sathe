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

know.addEventListener('click', (event) => {
  location.href('C:PortfolioWebsite(design2)about.html');
});
