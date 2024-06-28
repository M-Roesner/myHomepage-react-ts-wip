USE `Homepage`;

-- Kategorien einfügen
INSERT INTO CategorySkill (category_name)
VALUES ('Frontend'),
       ('Backend'),
       ('Design'),
       ('Other');

INSERT INTO CategoryProject (category_name)
VALUES ('personal'),
       ('retraining'),
       ('internship'),
       ('external');


-- Project Links
-- Homepage mit React.js und TypeScript
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Homepage mit React.js und TypeScript', 1);

-- Jump and Run Spiel
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Jump and Run Spiel', 1);

-- Haushaltsbuch
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Haushaltsbuch', 2);

-- Minesweeper
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Minesweeper', 2);

-- Homepage mit PHP
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Homepage mit PHP', 2);

-- 4 Gewinnt - SRH Edition
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('4 Gewinnt - SRH Edition', 2);

-- Erworbene Fähigkeiten beim Praktikum
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Erworbene Fähigkeiten beim Praktikum', 3);

-- Konverter Prototyp (docx zu JSON)
INSERT INTO ProjectLinks (project_name, category_project_id)
VALUES ('Konverter Prototyp (docx zu JSON)', 3);

-- Mein GitHub Account
INSERT INTO ProjectLinks (project_name, project_url, category_project_id)
VALUES ('Mein GitHub Account', 'https://github.com/M-Roesner', 4);
