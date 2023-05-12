import React, { useState } from "react";
import MobileContext from "../../hooks/MobileContext";
import TimelineNodes from "../../data/TimelineNodes";
import Container, { NodesContainer } from "../Styled/Containers";
import NodeCircle from "../Styled/NodeCircle";
import HLine from "../Styled/HLine";
import Node from "./Node";

const Timeline: React.FC = () => {
  const setSelected = (id: number) => {
    TimelineNodes.forEach((node, i) => {
      if (node.id === id) _setSelected(i);
    });
  };

  const [selected, _setSelected] = useState(0);
  return (
    <MobileContext.Consumer>
      {(isMobile) => (
        <Container hCenter column id={"timeline"}>
          <h1>Work</h1>
          <NodesContainer>
            {!isMobile && <NodeCircle small />}
            {TimelineNodes.map((node, i) => (
              <Node
                setSelected={setSelected}
                isSelected={i === selected}
                date={node.date}
                id={node.id}
                key={node.id}
              />
            ))}
            {!isMobile && <NodeCircle small />}
            <HLine />
          </NodesContainer>
          <h3>{TimelineNodes[selected].caption}</h3>
          <ul>
            {TimelineNodes[selected].bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Container>
      )}
    </MobileContext.Consumer>
  );
};

export default Timeline;
