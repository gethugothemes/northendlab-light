(function () {
  'use strict';
  // ----------------------------
  // navigation 
  // ----------------------------
  window.addEventListener('scroll', function () {
    let nav = document.querySelector('.navigation');
    if (window.scrollY > 1) {
      nav.classList.add('nav-bg');
    } else {
      nav.classList.remove('nav-bg');
    }
  });

  // Change active class on click
  document.querySelectorAll(".tools-filter-btn label").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".tools-filter-btn label").forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  // ----------------------------
  //  Search Form Open
  // ----------------------------
  document.getElementById('searchOpen')?.addEventListener('click', () => {
    const searchWrapper = document.querySelector('.search-wrapper');
    if (searchWrapper) {
      searchWrapper.classList.add('open');
      setTimeout(() => document.querySelector('.search-box')?.focus(), 400);
    }
  });

  document.getElementById('searchClose')?.addEventListener('click', () => {
    const searchWrapper = document.querySelector('.search-wrapper');
    if (searchWrapper) {
      searchWrapper.classList.remove('open');
    }
  });

  // ----------------------------
  // post slider
  // ----------------------------
  new Swiper(".slider-block", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    }
  });

  // ----------------------------
  // Shuffle js filter 
  // ----------------------------
  function shuffleInit() {
    var containerEl = document.querySelector('.shuffle-wrapper');
    if (containerEl) {
      var Shuffle = window.Shuffle;
      var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
      });

      // select all inputs with name "shuffle-filter"
      const inputs = document.querySelectorAll('input[name="shuffle-filter"]');

      // add event listener to the document object
      document.addEventListener('change', (evt) => {
        // check if the changed element is one of the shuffle-filter inputs
        if (evt.target.matches('input[name="shuffle-filter"]') && evt.target.checked) {
          myShuffle.filter(evt.target.value);
        }
      });
    }
  }
  shuffleInit()

})();