import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface Link {
  svg: FC;
  link: string;
}

export default [
  {
    svg: GitHubIcon,
    link: "https://github.com/harrytjbreen",
  },
  {
    svg: LinkedInIcon,
    link: "https://www.linkedin.com/in/harry-breen-b46372161/",
  },
] as Link[];
