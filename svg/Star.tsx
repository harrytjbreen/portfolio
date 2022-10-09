import React from "react";
import { useTheme } from "styled-components";

interface Props {
  filled?: boolean;
}

const Star: React.FC<Props> = ({ filled }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? theme.colors.primary : "none"}
      stroke={theme.colors.primary}
      strokeWidth={"2"}
      strokeLinejoin="round"
      className="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

export default Star;
