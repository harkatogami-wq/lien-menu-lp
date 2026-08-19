// ===== 申込み導線リンク設定 =====
// ここのURLを差し替えるだけで、サイト全体のボタンが更新されます。
const LINKS = {
  line: "#",       // TODO: LINE公式アカウントの「友だち追加」URLに差し替え（例: https://lin.ee/xxxxxxx）
  booking: "#",     // TODO: オンライン予約リンクに差し替え（例: STORES予約、Googleカレンダー予約など）
  instagram: "#",   // TODO: Instagramアカウント（Lienの発信用）のURLに差し替え
  home: "https://lien-hp-5qp.pages.dev/",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (LINKS[key] && LINKS[key] !== "#") {
    el.setAttribute("href", LINKS[key]);
    if (key === "line" || key === "instagram") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  }
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
