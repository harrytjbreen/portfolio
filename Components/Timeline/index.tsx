import React, { useState } from "react";
import styled from "styled-components";
import MobileContext from "../../hooks/MobileContext";
import TimelineNodes from "../../model/TimelineNode";
import Container from "../Styled/Containers";
import NodeCircle from "../Styled/NodeCircle";
import HLine from "../Styled/HLine";
import Node from "./Node";

const NodesContainer = styled(Container)`
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

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
            {!isMobile && <NodeCircle large />}
            {TimelineNodes.map((node, i) => (
              <Node
                setSelected={setSelected}
                isSelected={i === selected}
                date={node.date}
                id={node.id}
              />
            ))}
            {!isMobile && <NodeCircle large />}
            <HLine />
          </NodesContainer>
          <h3>{TimelineNodes[selected].caption}</h3>
          <p>{TimelineNodes[selected].text}</p>
        </Container>
      )}
    </MobileContext.Consumer>
  );
};

export default Timeline;
