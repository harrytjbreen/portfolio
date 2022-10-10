import React from "react";
import NodeCircle from "../Styled/NodeCircle";

interface Props {
  setSelected: (id: number) => void;
  isSelected: boolean;
  date: Date;
  id: number;
}

const Node: React.FC<Props> = ({ date, isSelected, setSelected, id }) => {
  const getMonthString = (): string =>
    date
      .toLocaleString("en-US", {
        month: "long",
      })
      .slice(0, 3);

  return (
    <NodeCircle
      isSelected={isSelected}
      column
      vCenter
      hCenter
      onClick={() => setSelected(id)}
    >
      <b>{getMonthString()}</b>
      {date.getFullYear()}
    </NodeCircle>
  );
};

export default Node;
