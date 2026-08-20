// ===== 申込み導線リンク設定 =====
// ここのURLを差し替えるだけで、サイト全体のボタンが更新されます。
const LINKS = {
  line: "https://utage-system.com/line/open/xe5Fn3q5YbF2?mtid=WSvCfRkiXhnn",  // LINE公式アカウント 友だち追加
  consult: "https://utage-system.com/p/yUTOiAhUpUHb",  // 無料相談 申込みページ（UTAGE）
  touch: "https://utage-system.com/p/1sVQbQX7JHOm",    // タッチケア予約ページ（UTAGE）
  instagram: "https://www.instagram.com/haruka_hagukumi_touch?igsh=ajV5ZXkzajBydjhz&igsi=ajV5ZXkzajBydjhz&utm_source=qr",
  home: "https://lien-hp-5qp.pages.dev/",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (LINKS[key] && LINKS[key] !== "#") {
    el.setAttribute("href", LINKS[key]);
    if (key !== "home") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  }
});

// ===== タッチケア写真スライドショー =====
const touchSlideshow = document.getElementById("touchSlideshow");
if (touchSlideshow) {
  const slides = touchSlideshow.querySelectorAll(".touch-slide");
  const dots = touchSlideshow.querySelectorAll(".touch-dot");
  let current = 0;

  const showSlide = (index) => {
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = index;
    slides[current].classList.add("is-active");
    dots[current].classList.add("is-active");
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 4000);
}

// ===== モバイルメニュー =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}
