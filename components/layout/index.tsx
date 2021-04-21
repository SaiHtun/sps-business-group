import styled, { css } from "styled-components";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Footer from "../Footer";
import { useMenu } from "../../context/menuContext";
import Head from "next/head";

type Props = {
  title: string;
  name: string;
  content: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "SPS business group",
  name = " SPS business group",
  content = "Myanmar most reliable and trusted mobile phone and electronic devices distributor",
}) => {
  const { menuOpen, setMenuOpen } = useMenu();

  const handleCloseMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name={name} content={content} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Container style={{ scrollbarGutter: "stable" }} open={menuOpen}>
        <Menu></Menu>
        <Right open={menuOpen} onClick={() => handleCloseMenu()}>
          <Navbar></Navbar>
          {children}
        </Right>
        <Push></Push>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default Layout;

const Push = styled.div`
  height: 200px;
`;

const Container = styled.div<{ open: boolean }>`
  overflow-x: hidden;
  height: 100%;
  margin-bottom: -400px;
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
  overflow-x: hidden;
  height: 100%;
  padding: 0px;

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
