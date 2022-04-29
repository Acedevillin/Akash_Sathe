gsap.from('.wrapper2', { opacity: 1, duration: 1 });

const accordnheader = document.querySelectorAll('.accordTitle');

accordnheader.forEach((accordnheader) => {
  accordnheader.addEventListener('click', (event) => {
    const currentlyActive = document.querySelector('.accordTitle.active');
    if (currentlyActive && currentlyActive !== accordnheader) {
      currentlyActive.classList.toggle('active');
      currentlyActive.nextElementSibling.style.maxHeight = 0;
    }

    accordnheader.classList.toggle('active');
    const accordContent = accordnheader.nextElementSibling;
    if (accordnheader.classList.contains('active')) {
      accordContent.style.maxHeight = accordContent.scrollHeight + 'px';
    } else {
      accordContent.style.maxHeight = 0;
    }
  });
});

const btn = document.querySelector('.button1');
btn.addEventListener('click', () => {
  window.open('./Akash_Sathe.pdf', '_blank');
});
