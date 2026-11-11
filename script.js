// ===== 申込み導線リンク設定 =====
// ここのURLを差し替えるだけで、サイト全体のボタンが更新されます。
const LINKS = {
  line: "https://utage-system.com/line/open/xe5Fn3q5YbF2?mtid=WSvCfRkiXhnn",  // LINE公式アカウント 友だち追加
  consult: "https://utage-system.com/p/yUTOiAhUpUHb",  // 無料相談 申込みページ（UTAGE）
  single: "https://utage-system.com/p/AcKOJvX0cIdo",   // 単発サポートLP 初回限定8,000円（UTAGE）
  touch: "https://utage-system.com/p/iQUtviWGv0vh",    // タッチケアの申込み先＝ベビマ🧸ランチ会LP（UTAGE・2026-11-11切替。旧タッチケア予約 1sVQbQX7JHOm は消えていた）
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

// ===== 写真スライドショー =====
document.querySelectorAll(".photo-slideshow").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".photo-slide");
  const dots = slideshow.querySelectorAll(".photo-dot");
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
});

// ===== モバイルメニュー =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}
