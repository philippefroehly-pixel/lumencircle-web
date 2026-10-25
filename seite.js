// lumencircle.ch — das ganze Skript der Seite. Ohne es ist alles lesbar und
// sichtbar; es fügt nur das Erscheinen beim Scrollen und das Duo-Kapitel hinzu.

(() => {
  const ruhig = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Erscheinen beim Scrollen. Wer Bewegung abgeschaltet hat, sieht alles sofort.
  const zeigen = document.querySelectorAll(".zeigen");
  if (ruhig || !("IntersectionObserver" in window)) {
    zeigen.forEach((el) => el.classList.add("ist-da"));
  } else {
    const beobachter = new IntersectionObserver((eintraege) => {
      for (const e of eintraege) {
        if (e.isIntersecting) {
          e.target.classList.add("ist-da");
          beobachter.unobserve(e.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    zeigen.forEach((el) => beobachter.observe(el));
  }

  // Duo-Kapitel: Der Abschnitt in der Bildschirmmitte bestimmt das Bild rechts.
  const schritte = [...document.querySelectorAll(".schritt")];
  const bilder = [...document.querySelectorAll(".duo-geraet figure")];
  if (schritte.length && bilder.length && "IntersectionObserver" in window) {
    const aktiv = (i) => {
      schritte.forEach((s, j) => s.classList.toggle("ist-aktiv", i === j));
      bilder.forEach((b, j) => b.classList.toggle("ist-aktiv", i === j));
    };
    const mitte = new IntersectionObserver((eintraege) => {
      for (const e of eintraege) {
        if (e.isIntersecting) aktiv(schritte.indexOf(e.target));
      }
    }, { rootMargin: "-48% 0px -48% 0px" });
    schritte.forEach((s) => mitte.observe(s));
  }
})();
