# Todos for the first release with the following dependencies:

React, TypeScript, React-Router, Styled-Component

## Todos:

1.  [x] create a file structure

2.  Creating the route with react-router-dom

    - [x] Navigation page
      - [x] Home icon
      - [x] Navigationbar
      - [x] Sozial icon bar
    - [x] Main part page
      - [x] Home page
      - [x] About me page
      - [x] My projects page
    - [x] imprint page

3.  Design - styled compontents

    - [x] Card layout:
      - [x] Vertical line on the left side
      - [x] Headline h1 - h6
      - [x] preview card for a single project
    - [x] Button layout:
      - [x] Navigation
        - [x] special Navigation animation
      - [x] Sozial Icon
      - [x] Button general (Link)
      - [x] Button general (NavLink)
      - [x] Normal Button design

4.  [] Content

    - [x] Home page content
      - [x] short description
      - [x] List of implemented and not yet implemented features.
      - [x] Cards to navigate to the “About me” and “Portfolio” pages
    - [x] About me page

      - [x] Aside navigation with links to the contained headlines.
      - [x] Introduction
        - [x] Styles
        - [x] content
      - [x] My future career
        - [x] Styles
        - [x] content
      - [x] Why in the world of the IT
        - [x] Styles
        - [x] content
      - [x] Skills
        - [x] Skill list (style different categories)
        - [x] Skill description (style)
          - [x] Icon (fontawesome? - There aren't all icons available.)
          - [x] name
          - [x] description
          - [x] project links

    - [x] Project page
      - [x] general design
        - [x] Aside navigation with links to the contained headlines.
        - [x] Title
        - [x] Description
          - [x] Why this project ...
        - [x] Image
          - [x] Display the selected image in full screen mode.
          - [x] Display of the selected image in full-screen mode and a list of images to scroll through.
        - [x] used skills
        - [x] Links
        - [x] category
        - [x] What I've learned
    - [x] Imprint page

5.  Additional Features

    - [x] Responsive design
    - [x] Add font
    - [x] Add final color Theme (60|30|10) primary color | secondary color | interactive elements

## Final steps for publication:

- Clean up code.
- Add / Adjust documentation if it is necessary.

### Better design

- Project Card: Slight zoom of preview image.

# Planned functionality after first release.

## Todos:

- [] Additional content: image concepts, text, Links, etc.
- [] Additional graphics with animations
- [] Multilingual support for English and German (i18next).
- [] Dark / Light mode
- [] Fetch data with Express.js from a MySQL database

# Checklist for publishing the website from the php version to the react version.

1.  **Branch für die Datenbankintegration erstellen:**

    - Erstelle einen neuen Branch, z.B. `feature/database-integration`, um dort die Datenbankintegration durchzuführen. Arbeite nur in diesem Branch, um keine Konflikte mit dem Hauptzweig (main branch) zu verursachen.

2.  **Entfernen der Base Route aus dem Main Branch:**

    - Entferne die Base Route aus `vite.config.js` und aus der Konfiguration von `createBrowserRouter` im Main Branch. Dies stellt sicher, dass deine React-Anwendung im Stammverzeichnis läuft und nicht im `/test-react-app` Verzeichnis.

3.  **.htaccess Datei nicht ändern:**

    - Richte deine `.htaccess` Datei so ein, dass sie weiterhin den `/test-react-app` Verzeichnis abdeckt, damit deine Testumgebung dort erreichbar bleibt, während deine Produktionsumgebung nun im Stammverzeichnis liegt.

4.  **Deployment auf Produktionsumgebung:**

    - Erstelle einen Build von deinem Main Branch und lade diesen auf deinen Server hoch. Stelle sicher, dass du alle Dateien außer der `.htaccess` Datei aus dem `/test-react-app` Verzeichnis entfernst.

5.  **Datenbank einrichten und testen:**

    - Implementiere und teste die Datenbankintegration in deinem `feature/database-integration` Branch. Stelle sicher, dass alle CRUD-Operationen ordnungsgemäß funktionieren.

6.  **Separates Build für Testumgebung:**

    - Erstelle einen separaten Build von deinem `feature/database-integration` Branch. Verwende die Base Route /test-react-app, damit du die Datenbankintegration in der Testumgebung testen kannst.

7.  **Merge in den Main Branch:**
    - Wenn alles erfolgreich getestet wurde, führe den Merge von `feature/database-integration` in den Main Branch durch.
    - Entferne die Base Route `/test-react-app` aus `vite.config.js` und createBrowserRouter, da die Anwendung nun im Stammverzeichnis läuft.
    - Erstelle einen finalen Build und lade ihn auf deinen Server hoch.

## Zusätzliche Überlegungen:

- **Backup**: Erstelle vor jedem größeren Deployment ein Backup deiner aktuellen Produktionsumgebung und der Datenbank.
- **Testing**: Führe umfassende Tests durch, um sicherzustellen, dass alle Änderungen wie erwartet funktionieren, bevor du sie in die Live-Umgebung übernimmst.
- **Versionskontrolle**: Verwende die Versionskontrolle effektiv, um Änderungen nachvollziehbar zu dokumentieren und Konflikte zu vermeiden.
