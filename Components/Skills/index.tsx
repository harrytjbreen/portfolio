import React from "react";
import styled from "styled-components";
import SkillsList from "../../model/Skill";
import SkillItem from "./SkillItem";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  grid-column-gap: 4rem;
  padding-inline: 4rem;
`;

const Skills: React.FC = () => (
  <div>
    <h1>Skills</h1>
    <SkillsContainer>
      {SkillsList.map((skill) => (
        <SkillItem name={skill.name} level={skill.level} />
      ))}
    </SkillsContainer>
  </div>
);

export default Skills;
