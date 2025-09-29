// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Typing animation for main heading
const textElement = document.querySelector('.text-two');
if (textElement) {
  const text = "I'm Bhoomi Jain";
  textElement.innerHTML = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing animation when page loads
  setTimeout(typeWriter, 1000);
}

// Animate skill bars on scroll
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skills .box .per');
  const skillsSection = document.querySelector('.skills');
  
  if (skillsSection) {
    const skillsTop = skillsSection.offsetTop;
    const skillsHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > skillsTop - windowHeight + skillsHeight / 2) {
      skillBars.forEach((bar, index) => {
        const percentage = bar.textContent;
        bar.style.opacity = '0';
        setTimeout(() => {
          bar.style.opacity = '1';
          bar.style.transform = 'scale(1.1)';
          setTimeout(() => {
            bar.style.transform = 'scale(1)';
          }, 200);
        }, index * 200);
      });
    }
  }
};

// Add scroll event listener for animations
window.addEventListener('scroll', animateSkillBars);

// Contact form interaction (if you add a contact form later)
const contactButton = document.querySelector('.contact button');
if (contactButton) {
  contactButton.addEventListener('click', function() {
    alert('Thank you for your interest! Please reach out via LinkedIn or email for project discussions.');
  });
}