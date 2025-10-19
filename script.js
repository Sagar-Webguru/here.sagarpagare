// =========================
// Back to Top Button
// =========================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 200);
});
backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================
// Dark / Light Mode with Persistence
// =========================
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleBtn.innerHTML =
    savedTheme === "light-mode"
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
}

toggleBtn?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const theme = body.classList.contains("light-mode")
    ? "light-mode"
    : "dark-mode";
  localStorage.setItem("theme", theme);

  toggleBtn.innerHTML =
    theme === "light-mode"
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
});

// =========================
// Typing Effect (About Section)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const text = `I am a passionate software development student currently in my 5th semester of BBA-CA, with a strong interest in building real-world projects. I enjoy working with full-stack technologies like PHP, MySQL, Python, and exploring modern frontend frameworks. I'm also learning AI and Machine Learning to expand my skills. With a background in accounting and finance, I bring a unique perspective to developing practical solutions.`;

  let index = 0;
  const typingElement = document.getElementById("typing");

  function type() {
    if (!typingElement) return;
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, Math.random() * 60 + 40);
    }
  }

  type();
});

// =========================
// Skills Animation (on scroll)
// =========================
const skills = document.querySelectorAll(".skill");
const animatedSkills = new Set(); // avoid reanimating

function animateSkills() {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    const fill = skill.querySelector(".fill");
    const percent = parseInt(skill.dataset.percent || "0", 10);

    if (rect.top < window.innerHeight - 50 && !animatedSkills.has(skill)) {
      fill.style.width = percent + "%";
      animatedSkills.add(skill);
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// =========================
// Optional: Smooth scrolling for nav links
// =========================
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
