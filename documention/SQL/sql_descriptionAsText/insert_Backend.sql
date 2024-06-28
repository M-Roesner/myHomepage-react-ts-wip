-- SQL für Skills der Kategorie "Backend"

USE `Homepage`;

-- Java
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Java', 3, 2, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["Java ist eine robuste und vielseitige Programmiersprache, die sich durch ihre Plattformunabhängigkeit und Sicherheitsmerkmale auszeichnet. Sie wird weltweit für die Entwicklung von mobilen Apps, Unternehmenslösungen und großen Systemen eingesetzt.","Dort sammelte ich meine ersten Erfahrungen mit objektorientierter Programmierung und lernte die Grundlagen der Programmierung kennen."]','FaJava', '2024-04-10', '2024-04-10'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Java'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Minesweeper'));


-- PHP
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('PHP', 1, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["PHP ist eine serverseitige Skriptsprache, die häufig für die Webentwicklung verwendet wird.","Mit PHP und objektorientierter Programmierung habe ich meine ersten Projekte erstellt, wie mein Haushaltsbuch und meine eigene Webseite.","Dies war eine großartige Gelegenheit, meine Fähigkeiten in der persönlichen Präsentation zu erweitern."]','SiPhp', '2024-04-08', '2024-04-08'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = '4 Gewinnt - SRH Edition')),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Homepage mit PHP')),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));


-- MySQL
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('MySQL', 3, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["MySQL ist ein Open-Source-Relationales Datenbankmanagementsystem, das SQL (Structured Query Language) verwendet, um Daten in einer Datenbank zu verwalten und abzufragen.","Meine ersten Erfahrungen mit einer relationalen Datenbank sammelte ich beim Erstellen eines Haushaltsbuchs, wo ich den Umgang mit Datenbanken im Backend und HTML/CSS im Frontend lernte."]','SiMysql', '2024-03-10', '2024-03-10'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'MySQL'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));


-- SQLite
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('SQLite', 4, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["SQLite ist eine C-Bibliothek, die eine kompakte und schnelle SQL-Datenbank-Engine bietet. Sie ist bekannt für ihre Einfachheit und Zuverlässigkeit.","Ich habe grundlegende Kenntnisse in SQLite, die es mir ermöglichen, einfache Datenbankoperationen durchzuführen."]','DiSqllite', '2024-01-28', '2024-01-28'
);


-- Express.js
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Express.js', 5, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["Express.js ist ein Webanwendungs-Framework für Node.js, das zur Erstellung von Webanwendungen und APIs verwendet wird.","Ich habe grundlegende Kenntnisse in Express.js, die es mir ermöglichen, einfache Server und API-Endpunkte zu erstellen."]','SiExpress', '2024-04-11', '2024-04-11'
);


-- AJAX
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('AJAX', 5, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["AJAX (Asynchronous JavaScript and XML) ist eine Technik zur Erstellung von schnelleren und dynamischeren Webanwendungen, indem es ermöglicht, Daten im Hintergrund zu laden und anzuzeigen, ohne die gesamte Seite neu zu laden.","Ich habe grundlegende Kenntnisse in AJAX, die es mir ermöglichen, dynamische und interaktive Webanwendungen zu entwickeln."]','FaDatabase', '2024-01-28', '2024-01-28'
);


-- PDO
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('PDO', 2, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'),'["PDO (PHP Data Objects) ist eine Datenbank-Abstraktionsschicht für PHP, die eine einheitliche Schnittstelle für den Zugriff auf verschiedene Datenbanken bietet.","Mit PDO habe ich mein Haushaltsbuch umgesetzt, bei dem ich sichere und effiziente Datenbankinteraktionen realisiert habe. Besonders hervorzuheben sind die Verwendung von Prepared Statements, die nicht nur die Sicherheit durch SQL-Injection-Prävention erhöhen, sondern auch die Performance bei wiederholten Abfragen verbessern."]','FaDatabase', '2022-07-01', '2022-07-01'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PDO'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));

