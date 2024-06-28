-- # Bereitstellen des Registers und die Skills darin:

-- Erhalte alle Skill Kategorien: id und category, aufsteigend sortiert.
-- skillCategories = ...
SELECT `category_skill_id` as id, category_name AS category FROM `CategorySkill` ORDER BY category_skill_id ASC;

-- Gehe durch alle Kategorien duch und hole die skills
-- Das durchlaufen muss in Typescript erfolgen durch mapping von 'skillCategories'.map((item) => ...
-- item === "Frontend"
SET @cat_id = 1;

SELECT s.skill_id AS id, s.skill_name AS name, s.priority, c.category_name AS category
FROM Skills AS s 
JOIN CategorySkill AS c ON c.category_skill_id = s.category_skill_id
WHERE c.category_skill_id = @cat_id  -- oder nach c.category_name = "Frontend"
ORDER BY s.priority ASC;

-- Beispiel für TypeScript-Logik:
/**
const skillCategories = await db.query("SELECT category_skill_id AS id, category_name AS category FROM CategorySkill ORDER BY category_skill_id ASC");

const skills = await Promise.all(
  skillCategories.map(async (item) => {
    const skillsForCategory = await db.query(
      `SELECT s.skill_id AS id, s.skill_name AS name, s.priority, c.category_name AS category
       FROM CategorySkill AS c
       JOIN Skills AS s ON c.category_skill_id = s.category_skill_id
       WHERE c.category_name = ?
       ORDER BY s.priority ASC;`,
      [item.category]
    );
    return { category: item.category, skills: skillsForCategory };
  })
);

console.log(skills);
 */


-- # Anzeigen der Beschreibung nach einer skill id:

SET @ID = 1;

-- Header:
SELECT s.icon as icon, s.skill_name as name, s.skill_level as level
    FROM skills as s
    WHERE s.skill_id = @ID;

-- Beschreibungen:
SELECT s.description
    FROM skills as s
    WHERE s.skill_id = @ID;

-- Links:
-- ..., wenn ich noch Inhalte aus Skills brauche:
SELECT pl.project_name as text, pl.project_url as url, pl.project_link_id as link_id
FROM Skills as s
JOIN SkillProjectLinks as spl ON s.skill_id = spl.skill_id
JOIN ProjectLinks as pl ON spl.project_link_id = pl.project_link_id
WHERE s.skill_id = @ID;

-- ..., wenn ich _keine_ Inhalte aus Skills brauche:
SELECT pl.project_name as text, pl.project_url as url, pl.project_link_id as link_id
FROM SkillProjectLinks AS spl
JOIN ProjectLinks AS pl ON spl.project_link_id = pl.project_link_id
WHERE spl.skill_id = @ID;


/**
import { db } from './db'; // Ihr Datenbankmodul

async function getSkillDetails(skillId: number) {
    // Abfrage für Header
    const [descriptionHeader] = await db.query(
        `SELECT s.icon as icon, s.skill_name as name, s.skill_level
         FROM Skills as s
         WHERE s.skill_id = ?;`,
        [skillId]
    );

    // Abfrage für Beschreibungen
    const descriptions = await db.query(
        `SELECT s.description
         FROM skills as s
         WHERE s.skill_id = ?;`,
        [skillId]
    );

    // Abfrage für Links
    const projectLinks = await db.query(
        `SELECT pl.project_name as text, pl.project_url as url, pl.project_link_id as link_id
         FROM SkillProjectLinks AS spl
         JOIN ProjectLinks AS pl ON spl.project_link_id = pl.project_link_id
         WHERE spl.skill_id = ?;`,
        [skillId]
    );

    // Zusammensetzen der Skill-Details
    const skill = {
        ...skillDetails,
        descriptions: descriptions.map(row => row.description),
        projectLinks: projectLinks.map(row => ({
            text: row.project_name,
            url: row.project_url,
            link_id: row.project_link_id
        }))
    };

    return skill;
}

// Beispielaufruf der Funktion
const skillId = 1; // Die Skill-ID, die Sie übergeben möchten
getSkillDetails(skillId).then(skill => {
    console.log(skill);
});
 */