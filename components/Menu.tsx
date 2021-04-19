import styled, { css } from "styled-components";
import { useMenu } from "../context/menuContext";
import { useRouter } from "next/router";

export default function Menu() {
  const { menuOpen, setMenuOpen } = useMenu();
  const router = useRouter();

  const handleClick = (route) => {
    setMenuOpen(false);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(router.push(route));
      }, 300);
    });
  };

  return (
    <Container open={menuOpen}>
      <Wrapper>
        <Close onClick={() => setMenuOpen(false)}>
          <span>X</span> Close{" "}
        </Close>
      </Wrapper>
      <Block onClick={() => handleClick("/")}>Profile</Block>
      <Block onClick={() => handleClick("/about")}>About</Block>
      <Block onClick={() => handleClick("/career")}>Career</Block>
    </Container>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid #c7c7c7;
  /* border-right: 1px solid #c7c7c7;  */
  height: 80px;
  position: relative;
`;

const Close = styled.p`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  transition: 0.3s;

  span {
    color: pink;
  }
`;

// conditional width !!
const Container = styled.div<{ open: boolean }>`
  width: 0px;
  height: 100vh;
  background-color: white;
  white-space: nowrap;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.3s;

  ${(props) =>
    props.open &&
    css`
      width: 400px;
    `}

  @media only screen and (max-width: 500px) {
    ${(props) =>
      props.open &&
      css`
        width: 300px;
      `};
  }

  :first-child(div) {
    text-align: right;
  }

  div {
    ${(props) =>
      props.open &&
      css`
        opacity: 1;
      `}
  }
`;

const Block = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  display: grid;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  transition: all 0.5s ease-in-out;

  :hover {
    color: plum;
  }
`;
