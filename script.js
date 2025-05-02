const counters = document.querySelectorAll('.counter');
        let started = false;
      
        function runCounters() {
          if (!started && window.scrollY + window.innerHeight > document.getElementById("stats").offsetTop) {
            started = true;
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-target');
              let count = 0;
      
              const update = () => {
                const increment = target / 50;
                count += increment;
                if (count < target) {
                  counter.textContent = Math.ceil(count);
                  requestAnimationFrame(update);
                } else {
                  counter.textContent = target;
                }
              };
              update();
            });
          }
        }
      
        window.addEventListener('scroll', runCounters);
        // Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ["Web Designer", "UI/UX Designer", "Photographer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typingText.textContent = currentChar;
  
  if (!isDeleting && charIndex < currentWord.length) {
    // Typing
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    charIndex--;
    setTimeout(type, 50);
  } else {
    // Change word
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}
//typing animation 
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const words = ["Web Designer", "Photographer"]; // Words to type
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const currentText = currentWord.substring(0, charIndex);
      typingElement.textContent = currentText;
  
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        setTimeout(type, 100); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(type, 50); // Deleting speed
      } else {
        // Switch to the next word
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, 1000); // Pause before deleting
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length; // Loop through words
          setTimeout(type, 500); // Pause before typing the next word
        }
      }
    }
  
    type();
  });

  //switching between dark and light mode
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Toggle between moon and sun icons
      if (body.classList.contains("dark-mode")) {
        darkModeToggle.classList.remove("fa-moon");
        darkModeToggle.classList.add("fa-sun");
      } else {
        darkModeToggle.classList.remove("fa-sun");
        darkModeToggle.classList.add("fa-moon");
      }
    });
  });

  //smooth scrolling when navigating to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });