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