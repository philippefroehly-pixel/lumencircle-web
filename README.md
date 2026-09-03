# smartdeck.ch

Die Webseite zu SmartDeck — eine statische Seite, kein Baukasten, kein
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

- Impressum ausfuellen (Name, Adresse, ggf. UID).
- `hallo@smartdeck.ch` als Postfach einrichten — die Adresse steht auf der
  Seite und in der Datenschutzerklaerung.
- Sobald die App im App Store ist: Link auf der Startseite ergaenzen und den
  Hinweis "noch nicht im App Store" entfernen.
