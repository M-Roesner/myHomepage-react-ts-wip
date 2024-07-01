-- Datenbank erstellen
CREATE DATABASE IF NOT EXISTS `Homepage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Homepage`;


-- SKILLS --------------------------------------------------------

-- Kategorien-Tabelle für Skills erstellen mit Eindeutigkeitsconstraint
CREATE TABLE CategorySkill (
  category_skill_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL UNIQUE
);


-- Skills-Tabelle erstellen
CREATE TABLE Skills (
  skill_id INT AUTO_INCREMENT PRIMARY KEY,
  skill_name VARCHAR(255) NOT NULL,
  priority INT,
  skill_level INT,
  category_skill_id INT NOT NULL,
  description TEXT, -- stored description as '["text 1", "text 2", "text 3", "text 4"]'
  icon VARCHAR(255),
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_skill_id) REFERENCES CategorySkill(category_skill_id) ON DELETE RESTRICT
);

-- Kommentar: Die ON DELETE RESTRICT-Klausel in der Skills-Tabelle bedeutet, dass
-- ein CategorySkill-Eintrag nicht gelöscht werden kann, solange noch Skills darauf
-- verweisen. Dies stellt sicher, dass alle Skills einer Kategorie gelöscht werden
-- müssen, bevor die Kategorie selbst gelöscht werden kann.


-- PROJECTS --------------------------------------------------------

-- Kategorien-Tabelle für Projekte erstellen mit Eindeutigkeitsconstraint
CREATE TABLE CategoryProject (
  category_project_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL UNIQUE
);


-- Project-Tabelle erstellen
CREATE TABLE Projects (
  project_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  introduction TEXT,
  why TEXT,
  knowledge TEXT,
  additional_info TEXT, -- for alternative titles and texts
  category_project_id INT NOT NULL,
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_project_id) REFERENCES CategoryProject(category_project_id) ON DELETE RESTRICT
);

-- Kommentar: Die ON DELETE RESTRICT-Klausel in der Projects-Tabelle bedeutet, dass
-- ein CategoryProject-Eintrag nicht gelöscht werden kann, solange noch Projekte darauf
-- verweisen. Dies stellt sicher, dass alle Projekte einer Kategorie gelöscht werden
-- müssen, bevor die Kategorie selbst gelöscht werden kann.


-- IMAGES --------------------------------------------------------

-- Images-Tabelle erstellen
CREATE TABLE Images (
  image_id INT AUTO_INCREMENT PRIMARY KEY,
  mobile VARCHAR(255) NOT NULL,
  tablet VARCHAR(255),
  desktop VARCHAR(255)
);

-- Projects_Images-Zwischentabelle erstellen
CREATE TABLE Projects_Images (
  project_id INT NOT NULL,
  image_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT, -- for image slider
  altText VARCHAR(255), -- if no image available
  isMainPreview BOOLEAN NOT NULL DEFAULT 0,
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES Projects(project_id) ON DELETE CASCADE,
  FOREIGN KEY (image_id) REFERENCES Images(image_id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, image_id)
);

-- Kommentar: isMainPreview kann verwendet werden, um festzulegen, dass dies das Hauptbild ist.


-- LINKS --------------------------------------------------------

-- Links-Tabelle erstellen, enthält entweder eine url als externer link oder eine project_id als Referenz.
CREATE TABLE Links (
  link_id INT AUTO_INCREMENT PRIMARY KEY,
  button_name VARCHAR(255) NOT NULL,
  url VARCHAR(255),
  project_id INT,
  is_external BOOLEAN NOT NULL DEFAULT 0,

  -- Auskommentieren wenn eine Projekt Tabelle vorhanden ist!
  -- FOREIGN KEY (project_id) REFERENCES Projects(project_id) ON DELETE CASCADE,

  CHECK ((url IS NOT NULL AND is_external = 1) OR (project_id IS NOT NULL AND is_external = 0))
  COMMENT = 'CHECK ((url IS NOT NULL AND is_external = 1) OR (project_id IS NOT NULL AND is_external = 0))';
);



-- Skills_Links-Zwischentabelle erstellen 
CREATE TABLE Skills_Links (
  skill_id INT NOT NULL,
  link_id INT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES Skills(skill_id) ON DELETE CASCADE,
  FOREIGN KEY (link_id) REFERENCES Links(link_id) ON DELETE CASCADE,
  PRIMARY KEY (skill_id, link_id)
);

-- Kommentar: Die ON DELETE CASCADE-Klausel bewirkt, dass beim Löschen eines Skills
-- automatisch alle zugeordneten Einträge in Skills_Links gelöscht werden.


-- Projects_Links-Zwischentabelle erstellen
CREATE TABLE Projects_Links (
  project_id INT NOT NULL,
  link_id INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES Projects(project_id) ON DELETE CASCADE,
  FOREIGN KEY (link_id) REFERENCES Links(link_id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, link_id)
);

-- Kommentar: Die ON DELETE CASCADE-Klausel bewirkt, dass beim Löschen eines Projekts
-- automatisch alle zugeordneten Einträge in Projects_Links gelöscht werden.
