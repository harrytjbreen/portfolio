import React from "react";
import SkillsList from "../../data/Skills";
import { SkillsContainer } from "../Styled/Containers";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => (
  <div id={"skills"}>
    <h1>Skills</h1>
    <SkillsContainer>
      {SkillsList.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </SkillsContainer>
  </div>
);

export default Skills;
