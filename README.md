# lumencircle.ch

Die Webseite zu Lumen Circle — eine statische Seite, kein Baukasten, kein
Framework. Drei HTML-Dateien, ein Stylesheet, zwei Medien.

## Aufbau

    index.html          Startseite (de-CH)
    en/index.html       Startseite (en)
    datenschutz.html …  Rechtstexte, je Sprache; noindex, nicht in der Sitemap
    styles.css          Farbwelt, Typografie, Glasflächen — aus der App übernommen
    seite.js            Erscheinen beim Scrollen und das Duo-Kapitel; ohne Skript
                        ist alles lesbar
    assets/             Bilder als WebP, das Duo frei gestellt in Apples
                        Geräterahmen; og-*.jpg für geteilte Links; intro.mp4

Stylesheet und Skript tragen eine Versionsmarke (`styles.css?v=…`). Wer sie
ändert, setzt die Marke neu — sonst zeigen Browser noch Stunden die alte Fassung.

## Bilder

Die Aufnahmen stammen aus dem Simulator, mit dem Vorführ-Zuhause und fester
Uhrzeit; die Werkzeuge dafür liegen unter `~/.appstoreconnect/store-bilder/`.
Die Duo-Rahmen sind Apples „Product Bezels" (Apple Design Resources) und
dürfen nur für Darstellungen der App verwendet werden; die Rahmen selbst
gehören nicht in dieses Repository.

## Ansehen

    python3 -m http.server 8791

Dann http://localhost:8791 öffnen. Ein Build-Schritt existiert nicht und
soll auch nicht entstehen: Was sich mit einer Datei lösen lässt, braucht
keine Werkzeugkette.

## Veröffentlichen

Jeder Push auf `main` veröffentlicht die Seite über **GitHub Pages**
(`CNAME` → lumencircle.ch), meist innerhalb einer Minute.

## Mail

`hallo@lumencircle.ch` ist ein echtes Postfach ueber **iCloud+ Eigene E-Mail-Domain**
(seit 5. September 2026), kein Weiterleiter und kein Zusatzabo — es laeuft im
bestehenden iCloud+ mit. Post landet in Apple Mail auf allen Geraeten.

Die Zone traegt dafuer fuenf Eintraege: zwei MX auf `mx01`/`mx02.mail.icloud.com`,
ein TXT `apple-domain=…` zur Besitzpruefung, ein SPF `v=spf1 include:icloud.com ~all`
und ein DKIM-CNAME auf `sig1._domainkey`. **Nicht loeschen** — ohne sie faellt die
Zustellung sofort aus. Die A- und CNAME-Eintraege fuer GitHub Pages sind davon
unberuehrt.

Dazu kommt ein DMARC-Eintrag auf `_dmarc` mit `p=reject`: Post, die vorgibt von
`@lumencircle.ch` zu kommen, es aber nicht ist, wird abgewiesen. Das ist gefahrlos,
solange iCloud der einzige Absender bleibt. **Kommt je ein Newsletter- oder
Versanddienst dazu, muss der vorher in den SPF-Eintrag** — sonst kommt seine Post
nirgends an, und niemand sieht warum.

`hallo@lumenglows.com` laeuft seit demselben Tag genauso (eigener Pruefcode und
eigener DKIM-Eintrag, MX und SPF identisch). `lumenglows.app` ist bewusst nicht
eingerichtet.

Verwaltet wird das unter icloud.com → iCloud+-Funktionen → Eigene E-Mail-Domain.
