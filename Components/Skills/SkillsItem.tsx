import React from "react";
import { Text } from "@nextui-org/react";
import Star from "../../svg/Star";
import StarOutline from "../../svg/StarOutline";
import { Skill } from "../../models/Skill";

const SkillsItem: React.FC<Skill> = ({ level, name }) => {
  return (
    <div>
      <Text h2>{name}</Text>
      <div>
        {[...Array(level)].map(() => (
          <Star />
        ))}
        {[...Array(5 - level)].map(() => (
          <StarOutline />
        ))}
      </div>
    </div>
  );
};

export default SkillsItem;
