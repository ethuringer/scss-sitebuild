const nav = document.querySelector('.nav');
const navbarBrand = nav.querySelector('.nav-navbar-brand');
const navLink = Array.from(nav.querySelectorAll('.nav-link'));
const navDownload = nav.querySelector('.download');
const navFeatures = nav.querySelector('.features');
const navContact = nav.querySelector('.contact');


navDownload.addEventListener('click', () => {
    document.querySelector('.discover').scrollIntoView({ 
        behavior: 'smooth' 
      });
})


navFeatures.addEventListener('click', () => {
    document.querySelector('.unlimited').scrollIntoView({ 
        behavior: 'smooth' 
      });
})

navContact.addEventListener('click', () => {
    document.querySelector('.social').scrollIntoView({ 
        behavior: 'smooth' 
      });
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
    nav.classList.add('nav-scroll');
    navbarBrand.classList.add('nav-navbar-brand-scroll');
    navLink.map(item => item.classList.add('nav-link-scroll'));
  } else {
    nav.classList.remove('nav-scroll');
    navbarBrand.classList.remove('nav-navbar-brand-scroll');
    navLink.map(item => item.classList.remove('nav-link-scroll'));
  }
}

