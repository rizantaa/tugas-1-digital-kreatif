// Tugas 1 - Digital Kreatif | Rizanta Ridho Aprilyan (19231312)

// Tombol kembali ke atas
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sorot menu daftar isi sesuai bagian yang sedang dibaca
const sections = document.querySelectorAll("section.jawaban, #referensi");
const tocLinks = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocLinks.forEach((link) => {
          link.style.background =
            link.getAttribute("href") === "#" + entry.target.id
              ? "#eff6ff"
              : "";
          link.style.color =
            link.getAttribute("href") === "#" + entry.target.id
              ? "#1a56db"
              : "";
        });
      }
    });
  },
  { rootMargin: "-20% 0px -70% 0px" }
);

sections.forEach((section) => observer.observe(section));
