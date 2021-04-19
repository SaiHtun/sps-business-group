import styled, { css } from "styled-components";

interface Props {
  title: string;
  position: string;
}

const Title: React.FC<Props> = ({ title, position }) => {
  return (
    <Container position={position}>
      <Text position={position}>{title}</Text>
    </Container>
  );
};

export default Title;

const Container = styled.div<{ position }>`
  display: flex;
  justify-content: ${(props) => props.position};
  align-items: center;
  width: 100%;
  padding: 100px 50px;
  color: #444444;

  @media only screen and (max-width: 500px) {
    padding: 50px 20px;
    justify-content: center !important;
  }
`;

const Text = styled.h2<{ position }>`
  position: relative;
  display: inline-block;

  ::before {
    content: "";
    width: 3px;
    height: 100%;
    background-color: salmon;
    position: absolute;
    top: 0;
    left: -10px;

    ${(props) =>
      props.position === "flex-end" &&
      css`
        left: auto;
        right: -10px;
      `};
  }

  @media only screen and (max-width: 500px) {
    font-size: 23px;
  }
`;
