const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn = document.getElementById('bookNowBtn');
  
  if (bookNowBtn) {
      bookNowBtn.addEventListener('click', function() {
          // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
          window.open('https://forms.gle/iDSQyCLz2gMPqCr57', '_blank');
      });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn1 = document.getElementById('bookNowBtn1');
  
  if (bookNowBtn1) {
      bookNowBtn1.addEventListener('click', function() {
          // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
          window.open('https://forms.gle/iDSQyCLz2gMPqCr57', '_blank');
      });
  }
});