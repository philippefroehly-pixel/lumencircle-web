# lumencircle.ch

Die Webseite zu Lumen Circle — eine statische Seite, kein Baukasten, kein
Framework. Drei HTML-Dateien, ein Stylesheet, zwei Medien.

## Aufbau

    index.html        Startseite
    datenschutz.html  Datenschutzerklaerung (fuer den App Store noetig)
    impressum.html    Impressum — die Angaben muessen noch ausgefuellt werden
    styles.css        Farbwelt und Typografie, aus der App uebernommen
    assets/           Screenshot und Einleitungsfilm

## Ansehen

    python3 -m http.server 8791

Dann http://localhost:8791 oeffnen. Ein Build-Schritt existiert nicht und
soll auch nicht entstehen: Was sich mit einer Datei loesen laesst, braucht
keine Werkzeugkette.

## Veroeffentlichen

Jeder Push auf `main` laedt die Seite per FTP zu Hostinger hoch
(`.github/workflows/deploy.yml`). Dafuer muessen im Repository drei
Geheimnisse hinterlegt sein — `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD` — zu
finden im hPanel unter *Dateien -> FTP-Konten*.

Alternativ kann Hostinger das Repository auch selbst abholen
(hPanel -> *Erweitert -> Git*). Dann wird der Workflow nicht gebraucht.

## Noch zu tun

- Sobald die App im App Store ist: Link auf der Startseite ergaenzen und den
  Hinweis "noch nicht im App Store" entfernen.

## Mail

`hallo@lumencircle.ch` ist ein echtes Postfach ueber **iCloud+ Eigene E-Mail-Domain**
(seit 5. September 2026), kein Weiterleiter und kein Zusatzabo — es laeuft im
bestehenden iCloud+ mit. Post landet in Apple Mail auf allen Geraeten.

Die Zone traegt dafuer fuenf Eintraege: zwei MX auf `mx01`/`mx02.mail.icloud.com`,
ein TXT `apple-domain=…` zur Besitzpruefung, ein SPF `v=spf1 include:icloud.com ~all`
und ein DKIM-CNAME auf `sig1._domainkey`. **Nicht loeschen** — ohne sie faellt die
Zustellung sofort aus. Die A- und CNAME-Eintraege fuer GitHub Pages sind davon
unberuehrt.

Verwaltet wird das unter icloud.com → iCloud+-Funktionen → Eigene E-Mail-Domain.
