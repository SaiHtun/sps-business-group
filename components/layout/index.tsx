import React from "react";
import styled, { css } from "styled-components";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Footer from "../Footer";
import { useMenu } from "../../context/menuContext";

export default function Layout(props) {
  const { menuOpen, setMenuOpen } = useMenu();

  const handleCloseMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Container open={menuOpen}>
        <Menu></Menu>
        <Right open={menuOpen} onClick={() => handleCloseMenu()}>
          <Navbar></Navbar>
          {props.children}
        </Right>
        <Footer></Footer>
      </Container>
    </>
  );
}

const Container = styled.div<{ open: boolean }>`
  overflow-x: hidden;
  height: 100vh;
  transition: background-color 0.5s ease-in-out;

  ${(props) =>
    props.open &&
    css`
      background-color: rgba(0, 0, 0, 0.6);
      height: 100vh;
      overflow-y: hidden;
    `};
`;

// conditional margin-left !!
const Right = styled.div<{ open: boolean }>`
  transition: all 0.3s ease-out;
  width: 100%;

  ${(props) =>
    props.open &&
    css`
      margin-left: 400px;
    `};

  @media only screen and (max-width: 500px) {
    ${(props) =>
      props.open &&
      css`
        margin-left: 300px;
      `};
  }
`;
