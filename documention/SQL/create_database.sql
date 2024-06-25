-- Datenbank erstellen
CREATE DATABASE  Homepage;

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
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  icon VARCHAR(255),
  FOREIGN KEY (category_skill_id) REFERENCES CategorySkill(category_skill_id) ON DELETE RESTRICT
);

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

-- SkillProjectLinks-Tabelle erstellen
CREATE TABLE SkillProjectLinks (
  skill_id INT NOT NULL,
  project_link_id INT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES Skills(skill_id) ON DELETE CASCADE,
  FOREIGN KEY (project_link_id) REFERENCES ProjectLinks(project_link_id) ON DELETE CASCADE,
  PRIMARY KEY (skill_id, project_link_id)
);

-- Descriptions-Tabelle erstellen
CREATE TABLE Descriptions (
  description_id INT AUTO_INCREMENT PRIMARY KEY,
  skill_id INT,
  description TEXT NOT NULL,
  description_order INT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES Skills(skill_id) ON DELETE CASCADE
);
