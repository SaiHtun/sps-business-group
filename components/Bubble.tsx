import styled, { css } from "styled-components";

interface Props {
  color: string;
  size: number;
  position?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const Bubble: React.FC<Props> = ({ color, size, position }) => {
  return <Container color={color} size={size} position={position}></Container>;
};

export default Bubble;

const Container = styled.div<Props>`
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;

  ${(props) =>
    props &&
    css`
      background-color: ${props.color};
      width: ${props.size}px;
      height: ${props.size}px;
      top: ${props.position?.top}px;
      right: ${props.position?.right}px;
      bottom: ${props.position?.bottom}px;
      left: ${props.position?.left}px;
    `}
`;
