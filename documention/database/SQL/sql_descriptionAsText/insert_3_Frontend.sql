-- SQL für Skills der Kategorie "Frontend"

USE `Homepage`;

-- React.js
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('React.js', 1, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["React.js ist eine beliebte JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Sie ermöglicht die Entwicklung dynamischer und interaktiver Webanwendungen, was meine Fähigkeiten in der modernen Webentwicklung erheblich erweitert hat.","Die Entscheidung, mit React.js zu arbeiten, wurde während meines Praktikums bei FutureNext getroffen. Dort war React.js die Haupttechnologie, die wir für die Entwicklung von Benutzeroberflächen einsetzten, insbesondere in Kombination mit TypeScript."]','FaReact', '2024-04-22', '2024-04-22'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'React.js'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript')),
((SELECT skill_id FROM Skills WHERE skill_name = 'React.js'), (SELECT link_id FROM Links WHERE button_name = 'Konverter Prototyp (docx zu JSON)')),
((SELECT skill_id FROM Skills WHERE skill_name = 'React.js'), (SELECT link_id FROM Links WHERE button_name = 'Erworbene Fähigkeiten beim Praktikum'));


-- TypeScript
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('TypeScript', 1, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["TypeScript ist eine Erweiterung von JavaScript, die statisches Typing und andere Funktionen hinzufügt.","Während meines Praktikums habe ich TypeScript in Verbindung mit React gelernt. Dies markierte den Beginn meiner Reise in die moderne Webentwicklung."]','SiTypescript', '2024-04-26', '2024-04-26'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'TypeScript'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript')),
((SELECT skill_id FROM Skills WHERE skill_name = 'TypeScript'), (SELECT link_id FROM Links WHERE button_name = 'Jump and Run Spiel')),
((SELECT skill_id FROM Skills WHERE skill_name = 'TypeScript'), (SELECT link_id FROM Links WHERE button_name = 'Konverter Prototyp (docx zu JSON)')),
((SELECT skill_id FROM Skills WHERE skill_name = 'TypeScript'), (SELECT link_id FROM Links WHERE button_name = 'Erworbene Fähigkeiten beim Praktikum'));

-- HTML
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('HTML', 5, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["HTML (Hypertext Markup Language) ist die Standardauszeichnungssprache zur Strukturierung von Webseiten und Webanwendungen.","Dies in Verbindung mit CSS ist wohl immer der Einstieg in Webentwicklung, so auch meiner."]','SiHtml5', '2024-04-22', '2024-04-22'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'HTML'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript')),
((SELECT skill_id FROM Skills WHERE skill_name = 'HTML'), (SELECT link_id FROM Links WHERE button_name = 'Jump and Run Spiel')),
((SELECT skill_id FROM Skills WHERE skill_name = 'HTML'), (SELECT link_id FROM Links WHERE button_name = '4 Gewinnt - SRH Edition')),
((SELECT skill_id FROM Skills WHERE skill_name = 'HTML'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit PHP'));


-- CSS / SCSS
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('CSS / SCSS', 5, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["SCSS ist eine Erweiterung von CSS, die Funktionen wie Variablen, Verschachtelungen und Mixins bietet.","Wie sagte einst mein Dozent zu uns, \"HTML ist das Skelett und CSS ist Batman\", also die Gestaltung der HTML-Struktur, um es ansprechender zu machen.","Bei meinen ersten privaten Projekten war es nach anfänglicher Hürde doch einfacher mit SCSS zu arbeiten als gedacht, da es den Code entschlackt und die Entwicklung erleichtert."]','SiCss3', '2024-04-10', '2024-04-10'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'CSS / SCSS'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript')),
((SELECT skill_id FROM Skills WHERE skill_name = 'CSS / SCSS'), (SELECT link_id FROM Links WHERE button_name = 'Jump and Run Spiel')),
((SELECT skill_id FROM Skills WHERE skill_name = 'CSS / SCSS'), (SELECT link_id FROM Links WHERE button_name = '4 Gewinnt - SRH Edition')),
((SELECT skill_id FROM Skills WHERE skill_name = 'CSS / SCSS'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit PHP'));


-- Styled Components
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Styled Components', 2, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["Styled Components ist eine CSS-in-JS-Bibliothek, mit der CSS direkt in JavaScript-Dateien geschrieben werden kann.","Es war für mich eine andere Art und Weise, CSS einzusetzen. In Verbindung mit React.js war es eine gute Kombination.","Ich entschied mich, Styled Components für den Umbau meiner eigenen Homepage zu verwenden, um sie auf den neuesten Stand zu bringen."]','SiStyledcomponents', '2024-04-17', '2024-04-17'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Styled Components'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript'));


-- React Router
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('React Router', 1, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["React Router ist eine Bibliothek für die Navigation in React-Anwendungen.","Damit war ich in der Lage, komplexe Routen und Navigationsstrukturen in meinen Projekten umzusetzen, was die Benutzerfreundlichkeit erheblich verbessert hat.","Es bot sich an, React Router gleich für meine Homepage zu nutzen, um eine bessere Navigation zu ermöglichen."]','SiReactrouter', '2024-04-02', '2024-04-02'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'React Router'), (SELECT link_id FROM Links WHERE button_name = 'Homepage mit React.js und TypeScript'));


-- Redux (Toolkit)
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Redux (Toolkit)', 2, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["Redux Toolkit ist ein offizielles Paket von Redux, das nützliche Funktionen und Werkzeuge für die State-Management-Logik bereitstellt.","Ich hatte meine ersten Berührungen damit während meines Praktikums und habe es in meinen Projekten verwendet. Dabei habe ich die Vorteile erkannt, von überall auf den State zugreifen zu können."]','SiRedux', '2024-06-17', '2024-06-17'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Redux (Toolkit)'), (SELECT link_id FROM Links WHERE button_name = 'Erworbene Fähigkeiten beim Praktikum'));


-- JavaScript
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('JavaScript', 1, 4, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Frontend'),'["JavaScript ist eine vielseitige Programmiersprache, die oft für die Webentwicklung genutzt wird.","Sie war mein Einstieg in die Webentwicklung und ermöglichte mir, dynamische und interaktive Webseiten zu erstellen."]','SiJavascript', '2024-04-27', '2024-04-27'
);

INSERT INTO Skills_Links (skill_id, link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'JavaScript'), (SELECT link_id FROM Links WHERE button_name = 'Jump and Run Spiel')),
((SELECT skill_id FROM Skills WHERE skill_name = 'JavaScript'), (SELECT link_id FROM Links WHERE button_name = 'Erworbene Fähigkeiten beim Praktikum')),
((SELECT skill_id FROM Skills WHERE skill_name = 'JavaScript'), (SELECT link_id FROM Links WHERE button_name = 'Haushaltsbuch'));