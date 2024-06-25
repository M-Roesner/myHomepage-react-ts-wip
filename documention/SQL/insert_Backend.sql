-- SQL für Skills der Kategorie "Backend"

-- Java
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('Java', 3, 2, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'FaJava', '2024-04-10', '2024-04-10');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Java'), 'Java ist eine robuste und vielseitige Programmiersprache, die sich durch ihre Plattformunabhängigkeit und Sicherheitsmerkmale auszeichnet. Sie wird weltweit für die Entwicklung von mobilen Apps, Unternehmenslösungen und großen Systemen eingesetzt.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'Java'), 'Dort sammelte ich meine ersten Erfahrungen mit objektorientierter Programmierung und lernte die Grundlagen der Programmierung kennen.', 2);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Java'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Minesweeper'));


-- PHP
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('PHP', 1, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'SiPhp', '2024-04-08', '2024-04-08');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), 'PHP ist eine serverseitige Skriptsprache, die häufig für die Webentwicklung verwendet wird.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), 'Mit PHP und objektorientierter Programmierung habe ich meine ersten Projekte erstellt, wie mein Haushaltsbuch und meine eigene Webseite.', 2),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), 'Dies war eine großartige Gelegenheit, meine Fähigkeiten in der persönlichen Präsentation zu erweitern.', 3);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = '4 Gewinnt - SRH Edition')),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Homepage mit PHP')),
((SELECT skill_id FROM Skills WHERE skill_name = 'PHP'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));


-- MySQL
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('MySQL', 3, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'SiMysql', '2024-03-10', '2024-03-10');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'MySQL'), 'MySQL ist ein Open-Source-Relationales Datenbankmanagementsystem, das SQL (Structured Query Language) verwendet, um Daten in einer Datenbank zu verwalten und abzufragen.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'MySQL'), 'Meine ersten Erfahrungen mit einer relationalen Datenbank sammelte ich beim Erstellen eines Haushaltsbuchs, wo ich den Umgang mit Datenbanken im Backend und HTML/CSS im Frontend lernte.', 2);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'MySQL'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));


-- SQLite
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('SQLite', 4, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'DiSqllite', '2024-01-28', '2024-01-28');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'SQLite'), 'SQLite ist eine C-Bibliothek, die eine kompakte und schnelle SQL-Datenbank-Engine bietet. Sie ist bekannt für ihre Einfachheit und Zuverlässigkeit.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'SQLite'), 'Ich habe grundlegende Kenntnisse in SQLite, die es mir ermöglichen, einfache Datenbankoperationen durchzuführen.', 2);


-- Express.js
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('Express.js', 5, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'SiExpress', '2024-04-11', '2024-04-11');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Express.js'), 'Express.js ist ein Webanwendungs-Framework für Node.js, das zur Erstellung von Webanwendungen und APIs verwendet wird.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'Express.js'), 'Ich habe grundlegende Kenntnisse in Express.js, die es mir ermöglichen, einfache Server und API-Endpunkte zu erstellen.', 2);


-- AJAX
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('AJAX', 5, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'FaDatabase', '2024-01-28', '2024-01-28');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'AJAX'), 'AJAX (Asynchronous JavaScript and XML) ist eine Technik zur Erstellung von schnelleren und dynamischeren Webanwendungen, indem es ermöglicht, Daten im Hintergrund zu laden und anzuzeigen, ohne die gesamte Seite neu zu laden.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'AJAX'), 'Ich habe grundlegende Kenntnisse in AJAX, die es mir ermöglichen, dynamische und interaktive Webanwendungen zu entwickeln.', 2);


-- PDO
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, icon, added_date, updated_date)
VALUES ('PDO', 2, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Backend'), 'FaDatabase', '2022-07-01', '2022-07-01');

INSERT INTO Descriptions (skill_id, description, description_order)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PDO'), 'PDO (PHP Data Objects) ist eine Datenbank-Abstraktionsschicht für PHP, die eine einheitliche Schnittstelle für den Zugriff auf verschiedene Datenbanken bietet.', 1),
((SELECT skill_id FROM Skills WHERE skill_name = 'PDO'), 'Mit PDO habe ich mein Haushaltsbuch umgesetzt, bei dem ich sichere und effiziente Datenbankinteraktionen realisiert habe. Besonders hervorzuheben sind die Verwendung von Prepared Statements, die nicht nur die Sicherheit durch SQL-Injection-Prävention erhöhen, sondern auch die Performance bei wiederholten Abfragen verbessern.', 2);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'PDO'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Haushaltsbuch'));

