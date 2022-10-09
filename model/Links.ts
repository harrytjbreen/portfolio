import { FC } from "react";
import Github from "../svg/Github";
import LinkedIn from "../svg/LinkedIn";

export interface Link {
  svg: FC;
  link: string;
}

export default [
  {
    svg: Github,
    link: "https://github.com/harrytjbreen",
  },
  {
    svg: LinkedIn,
    link: "https://www.linkedin.com/in/harry-breen-b46372161/",
  },
] as Link[];
