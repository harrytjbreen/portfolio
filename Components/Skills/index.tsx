import React from "react";
import { Container, Text } from "@nextui-org/react";
import SkillsItem from "./SkillsItem";
import skills from "../../models/Skill";

const Skills: React.FC = () => {
  return (
    <Container
      id={"skills"}
      display={"flex"}
      direction={"column"}
      alignItems={"center"}
    >
      <Text h1>Skills</Text>
      <div>
        {skills.map((item) => (
          <SkillsItem {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
