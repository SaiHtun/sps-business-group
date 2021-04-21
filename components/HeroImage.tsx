import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import styled from "styled-components";
import { useMenu } from "../context/menuContext";

type Props = {
  path: string;
};

const HeroImage: React.FC<Props> = ({ path, children }) => {
  const { menuOpen } = useMenu();

  return (
    <>
      <Container open={menuOpen} path={path}>
        {children}
      </Container>
    </>
  );
};

export default HeroImage;

const Container = styled.div<{ open: boolean; path: string }>`
  width: 100%;
  min-height: 600px;
  height: max-content;
  overflow-x: hidden;
  background: ${(props) => `url(${props.path})`};
  background-size: cover;
  position: relative;
  display: block;
  z-index: ${(props) => props.open && -1};

  @media only screen and (max-width: 800px) {
    height: 600px;
  }
  @media only screen and (max-width: 600px) {
    height: 500px;
  }
  @media only screen and (max-width: 500px) {
    background-position: center;
    height: 500px;
  }
  @media only screen and (max-width: 400px) {
    background-position: center;
    height: 500px;
  }
`;
