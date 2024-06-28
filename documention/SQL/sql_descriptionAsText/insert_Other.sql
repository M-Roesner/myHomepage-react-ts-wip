-- SQL für Skills der Kategorie "Other"

USE `Homepage`;

-- GitHub
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('GitHub', 1, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["GitHub ist eine webbasierte Plattform zur Versionskontrolle und Zusammenarbeit an Softwareprojekten.","Es bietet mir eine sichere Möglichkeit, meinen Quellcode zu speichern und ermöglicht den Austausch mit anderen Entwicklern.","Während meiner persönlichen Projekte habe ich GitHub intensiv genutzt, um meine Projekte zu verwalten und meine Entwicklungsfähigkeiten zu verbessern."]','SiGithub', '2024-04-26', '2024-04-26'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'GitHub'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Mein GitHub Account'));


-- MS Word
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('MS Word', 4, 5, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["Microsoft Word ist ein Textverarbeitungsprogramm, das zur Erstellung von Dokumenten verwendet wird.","Schon während meiner Schulzeit kam ich zwangsläufig mit Word in Berührung, was sich auch während meines Berufslebens fortgesetzt hat.","Ich habe damit viel gearbeitet und viele Fähigkeiten im Umgang mit Textverarbeitung und Dokumentenlayout entwickelt."]','SiMicrosoftword', '2024-04-09', '2024-04-09'
);


-- MS Excel
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('MS Excel', 4, 5, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["Microsoft Excel ist ein Tabellenkalkulationsprogramm, das für Berechnungen, Datenanalyse und Visualisierung verwendet wird.","Excel ist mehr als nur eine Tabelle; es ermöglicht komplexe Berechnungen, Datenanalyse und die Automatisierung von Arbeitsabläufen.","Während meiner Zeit in der Buchbinderei habe ich Excel intensiv genutzt, um von einfachen Tabellen bis hin zu automatisierten Arbeitsblättern für Tageszettel, Palettenzettel und Lieferscheine zu arbeiten.","Dabei war es mir wichtig, nicht nur meine eigene Arbeit zu erleichtern, sondern auch meine Kollegen zu unterstützen und ihre täglichen Aufgaben effizienter zu gestalten."]','SiMicrosoftexcel', '2024-04-27', '2024-04-27'
);


-- Figma
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Figma', 3, 1, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["Figma ist ein webbasiertes Design- und Prototyping-Tool, das zur Erstellung von UI/UX-Designs verwendet wird.","Obwohl ich während meines Praktikums nicht intensiv mit Figma gearbeitet habe, habe ich dennoch die Vorteile dieser Plattform erkannt, insbesondere in der Zusammenarbeit mit Designern."]','SiFigma', '2024-04-01', '2024-04-01'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Figma'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Erworbene Fähigkeiten beim Praktikum'));


-- Azure
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Azure', 2, 3, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["Azure ist eine umfassende Cloud-Computing-Plattform von Microsoft, die eine Vielzahl von Diensten zur Entwicklung, Bereitstellung und Verwaltung von Anwendungen und Diensten über das Internet bietet.","Während meines Praktikums konnte ich Azure intensiv kennenlernen und damit arbeiten. Es war mein erster professioneller Kontakt mit einer Cloud-Plattform, was mir half, die Nutzung von Cloud-Services zu erlernen sowie die Planung und Zusammenarbeit in Teams zu verbessern."]','SiAzuredevops', '2024-06-17', '2024-06-17'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Azure'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Erworbene Fähigkeiten beim Praktikum'));


-- Canvas
INSERT INTO Skills (skill_name, priority, skill_level, category_skill_id, description, icon, added_date, updated_date)
VALUES ('Canvas', 3, 2, (SELECT category_skill_id FROM CategorySkill WHERE category_name = 'Other'),'["Canvas ist ein HTML5-Element, das zur dynamischen, programmatischen Generierung und Manipulation von Grafiken, Animationen und anderen visuellen Effekten verwendet wird.","Ich habe Canvas genutzt, um ein Jump and Run Spiel zu entwickeln. Dabei habe ich verschiedene Techniken angewendet, wie die Nutzung von Canvas-Funktionen zum Zeichnen von Bildern, die Implementierung von Sprite-Animationen sowie die Integration von Parallaxeffekten."]','SiHtml5', '2024-06-17', '2024-06-17'
);

INSERT INTO SkillProjectLinks (skill_id, project_link_id)
VALUES 
((SELECT skill_id FROM Skills WHERE skill_name = 'Canvas'), (SELECT project_link_id FROM ProjectLinks WHERE project_name = 'Jump and Run Spiel'));
