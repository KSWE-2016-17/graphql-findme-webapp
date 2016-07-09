# find.me ReactJS

## Einrichtung der Entwicklungsumgebung

### System

Zur Entwicklung wird das Tool `npm` benötigt.
Dazu einfach für das jeweilige System [Node.js](https://nodejs.org)
herunterladen und installieren.

Bei Linux-System kann es sein,
dass in den Repositories veraltete Versionen verfügbar sind.
Hier dann manuell die aktuellste Version von Node.js und npm installieren,
da die veralteten Versionen nicht funktionieren.

Derzeitige aktuelle Versionen sind:

* node: 6.2.2
* npm: 3.10.2

Außerdem wird Git benötigt.

Node, npm und git müssen im PATH aufgenommen werden,
falls dies nicht bereits automatisch durch das System gemacht wurde
(betrifft meist nur Windows-Systeme).

### Projekt

Zuerst muss das Repository geklont und betreten werden.

```bash
# cd to wherever you want to
git clone https://github.com/findme-react/js-webapp.git
cd js-webapp
```

Zur Einrichtung der Projekt-Umgebung kann npm genutzt werden:

```bash
npm install
```

Wenn alle Abhängigkeiten heruntergeladen wurden,
dann kann am Projekt gearbeitet werden.

Es stehen folgende npm-Skripte zur Verfügung:

| Skript / Aufruf | Beschreibung |
|---|---|
| `npm run startDev` | Startet `webpack-dev-server` im `watch`-Modus mit hot-swapping. Außerdem wird immer `npm install` aufgerufen, um sicherzustellen, dass die Umgebung auch wirklich aktuell ist. |
| `npm run lint` | Führt `eslint` zur statischen Code-Analyse aus. |
| `npm test` | Führt mittels `karma` alle Unit-Tests aus. |

Die Webseite ist unter
[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)
zu finden.
