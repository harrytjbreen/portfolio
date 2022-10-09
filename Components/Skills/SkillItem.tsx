import React from "react";
import { Skill } from "../../model/Skill";
import Star from "../../svg/Star";
import Container from "../Styled/Containers";
import styled from "styled-components";

const SkillItemContainer = styled(Container)`
  justify-content: space-between;
`;

const SkillItem: React.FC<Skill> = ({ name, level }) => {
  return (
    <SkillItemContainer hCenter>
      <h3>{name}</h3>
      <div>
        {[...Array(level)].map(() => (
          <Star filled />
        ))}
        {[...Array(5 - level)].map(() => (
          <Star />
        ))}
      </div>
    </SkillItemContainer>
  );
};

export default SkillItem;
