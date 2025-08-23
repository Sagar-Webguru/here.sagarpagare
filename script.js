// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light Mode
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  toggleBtn.innerHTML = body.classList.contains("light-mode")
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Typing effect
document.addEventListener("DOMContentLoaded", () => {
  const text = `I am a passionate software development student currently in my 5th semester of BBA-CA, with a strong interest in building real-world projects. I enjoy working with full-stack technologies like PHP, MySQL, Python, and exploring modern frontend frameworks. I'm also learning AI and Machine Learning to expand my skills. With a background in accounting and finance, I bring a unique perspective to developing practical solutions.`;
  let index = 0;
  const typingElement = document.getElementById("typing");
  typingElement.innerHTML = "";
  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, Math.random() * 70 + 30);
    }
  }
  type();
});

// Skills animation
document.querySelectorAll('.skill').forEach(skill => {
  const fill = skill.querySelector('.fill');
  const percent = parseInt(skill.dataset.percent || '0', 10);

  skill.addEventListener('mouseenter', () => {
    requestAnimationFrame(() => {
      fill.style.width = percent + '%';
    });
  });

  // Keep filled after hover
  skill.addEventListener('mouseleave', () => {
    fill.style.width = percent + '%';
  });
});
