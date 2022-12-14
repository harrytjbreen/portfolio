import { Skill } from "../model/Skill";

//TODO add more skills
//I should probably learn something else...

export default [
  {
    name: "React",
    level: 5,
  },
  {
    name: "Vue",
    level: 5,
  },
  {
    name: "Next",
    level: 4,
  },
  {
    name: "Neo4j",
    level: 3,
  },
  {
    name: "Node",
    level: 4,
  },
  {
    name: "CSS/SCSS",
    level: 4,
  },
  {
    name: "Python",
    level: 3,
  },
  {
    name: "AWS",
    level: 3,
  },
  {
    name: "Jest",
    level: 4,
  },
  {
    name: "Cypress",
    level: 3,
  },
].sort((a, b) =>
  a.level < b.level ? 1 : b.level < a.level ? -1 : 0
) as Skill[];
