// nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// mini quote form
const miniForm = document.getElementById("miniQuoteForm");
if (miniForm) {
  miniForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your quick enquiry has been captured. In a real project this would be sent to WhatsApp / email / CRM."
    );
    miniForm.reset();
  });
}

// contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your project details have been submitted. Replace this with real form handling / WhatsApp integration."
    );
    contactForm.reset();
  });
}

// FAQ toggle
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");
  if (!btn) return;
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// generic slider
function initAutoSlider(containerSelector, slideSelector, intervalMs) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const slides = Array.from(container.querySelectorAll(slideSelector));
  if (!slides.length) return;

  let index = 0;

  function show(i) {
    slides.forEach((s, idx) => {
      if (idx === i) s.classList.add("active");
      else s.classList.remove("active");
    });
  }

  show(index);

  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, intervalMs);
}

// main service slider (2.5s) & mock slider (2s)
initAutoSlider("#serviceMainSlider", ".service-slide", 2500);
initAutoSlider("#mockSlider", ".mock-slide", 2000);

// category thumbs: each card me 3 images auto rotate
function initCategoryThumbSlider(intervalMs) {
  const thumbs = document.querySelectorAll(".category-thumb");
  if (!thumbs.length) return;

  // ensure first image active
  thumbs.forEach((thumb) => {
    const imgs = thumb.querySelectorAll("img");
    if (!imgs.length) return;
    if (![...imgs].some((img) => img.classList.contains("active"))) {
      imgs[0].classList.add("active");
    }
  });

  setInterval(() => {
    thumbs.forEach((thumb) => {
      const imgs = thumb.querySelectorAll("img");
      if (imgs.length <= 1) return;

      let currentIndex = 0;
      imgs.forEach((img, i) => {
        if (img.classList.contains("active")) currentIndex = i;
      });

      imgs[currentIndex].classList.remove("active");
      const nextIndex = (currentIndex + 1) % imgs.length;
      imgs[nextIndex].classList.add("active");
    });
  }, intervalMs);
}

initCategoryThumbSlider(2000);
