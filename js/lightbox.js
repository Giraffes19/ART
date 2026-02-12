const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const images = document.querySelectorAll(".gallery img");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showImage(index) {
  const img = images[index];
  lightboxImg.src = img.src;
  lightboxCaption.innerHTML = img.dataset.caption || "";
  currentIndex = index;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
    lightbox.classList.add("active");
  });
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
