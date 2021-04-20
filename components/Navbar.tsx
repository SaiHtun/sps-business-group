import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useMenu } from "../context/menuContext";
import { useRouter } from "next/router";

export default function Layout() {
  const { menuOpen, setMenuOpen } = useMenu();
  const router = useRouter();

  return (
    <Nav open={menuOpen}>
      <Container>
        <HamWrapper
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Image src="/menu.svg" width={20} height={20} className="hamburger" />
        </HamWrapper>
        <Brand onClick={() => router.push("/")}>
          <span> SPS</span> <small> business group</small>
        </Brand>
        <Links>
          <Link href="/">
            <li>Profile</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/career">
            <li>Career</li>
          </Link>
        </Links>
      </Container>
    </Nav>
  );
}

const HamWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 6px;
  left: 30px;
  display: none;

  @media only screen and (max-width: 800px) {
    display: inline-block;
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  width: 100vw;
  height: 80px;
  background-color: white;
  z-index: 10;
  line-height: 80px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  li {
    cursor: pointer;
  }

  ${(props) =>
    props.open &&
    css`
      box-shadow: none;
    `};
`;

const Container = styled.div`
  padding: 0px 100px 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 800px) {
    padding: 0px 50px 0px 50px;
    justify-content: center;
  }
`;

const Brand = styled.p`
  font-size: 15px;
  color: #444444;
  font-style: italic;

  span {
    color: #3cadda;
    font-size: 2em !important;
    font-weight: 800;
    font-style: italic;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  li {
    width: 100px;
    text-align: right;
  }
`;
