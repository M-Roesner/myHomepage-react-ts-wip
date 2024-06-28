-- Datenbank erstellen
CREATE DATABASE IF NOT EXISTS `Homepage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Homepage`;

-- Kategorien-Tabelle für Skills erstellen mit Eindeutigkeitsconstraint
CREATE TABLE CategorySkill (
  category_skill_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL UNIQUE
);

-- Skills-Tabelle erstellen
CREATE TABLE Skills (
  skill_id INT AUTO_INCREMENT PRIMARY KEY,
  skill_name VARCHAR(255) NOT NULL,
  priority INT NOT NULL,
  skill_level INT,
  category_skill_id INT,
  description TEXT,
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  icon VARCHAR(255),
  FOREIGN KEY (category_skill_id) REFERENCES CategorySkill(category_skill_id) ON DELETE RESTRICT
);

-- Kommentar: Die ON DELETE RESTRICT-Klausel in der Skills-Tabelle bedeutet, dass
-- ein CategorySkill-Eintrag nicht gelöscht werden kann, solange noch Skills darauf
-- verweisen. Dies stellt sicher, dass alle Skills einer Kategorie gelöscht werden
-- müssen, bevor die Kategorie selbst gelöscht werden kann.

-- Kategorien-Tabelle für Projekte erstellen mit Eindeutigkeitsconstraint
CREATE TABLE CategoryProject (
  category_project_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL UNIQUE
);

-- ProjectLinks-Tabelle erstellen
CREATE TABLE ProjectLinks (
  project_link_id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  project_url VARCHAR(255),
  category_project_id INT,
  FOREIGN KEY (category_project_id) REFERENCES CategoryProject(category_project_id) ON DELETE RESTRICT
);

-- Kommentar: Die ON DELETE RESTRICT-Klausel in der ProjectLinks-Tabelle bedeutet, dass
-- ein CategoryProject-Eintrag nicht gelöscht werden kann, solange noch ProjectLinks darauf
-- verweisen. Dies stellt sicher, dass alle ProjectLinks einer Kategorie gelöscht werden
-- müssen, bevor die Kategorie selbst gelöscht werden kann.

-- SkillProjectLinks-Tabelle erstellen
CREATE TABLE SkillProjectLinks (
  skill_id INT NOT NULL,
  project_link_id INT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES Skills(skill_id) ON DELETE CASCADE,
  FOREIGN KEY (project_link_id) REFERENCES ProjectLinks(project_link_id) ON DELETE CASCADE,
  PRIMARY KEY (skill_id, project_link_id)
);

-- Kommentar: Die ON DELETE CASCADE-Klausel bewirkt, dass beim Löschen eines Skills
-- automatisch alle zugeordneten Einträge in SkillProjectLinks gelöscht werden.
