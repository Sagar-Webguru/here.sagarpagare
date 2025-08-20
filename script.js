// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/light mode toggle
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    body.style.background = "#0d1117";
    body.style.color = "#eee";
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.style.background = "#f2f4f8";
    body.style.color = "#333";
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const text = `I am a passionate software development student currently in my 5th semester of BBA-CA, with a strong interest in building real-world projects. As a fresher, I enjoy working with full-stack technologies like PHP, MySQL, Python, and exploring modern frontend frameworks. Alongside my studies, I am actively learning Artificial Intelligence and Machine Learning to expand my technical skills. With a background in accounting and financial operations, I bring a unique perspective to developing practical and business-oriented solutions.`;

  let index = 0;
  const typingElement = document.getElementById("typing");

  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, Math.random() * 70 + 30); // natural typing effect
    }
  }

  type();
});
// Skills hover progress animation
(function () {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const fill = skill.querySelector('.fill');
    const percent = parseInt(skill.dataset.percent || '0', 10);

    // animate on hover
    skill.addEventListener('mouseenter', () => {
      // Trigger to the target percent
      requestAnimationFrame(() => {
        fill.style.width = percent + '%';
      });
    });

    // reset when mouse leaves
    skill.addEventListener('mouseleave', () => {
      fill.style.width = '0%';
    });

    // Optional: if you want it to animate in when scrolled into view for the first time
    // uncomment this block:
    // const once = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       fill.style.width = percent + '%';
    //       setTimeout(() => fill.style.width = '0%', 1200);
    //       once.unobserve(skill);
    //     }
    //   });
    // }, { threshold: 0.6 });
    // once.observe(skill);
  });
})();
