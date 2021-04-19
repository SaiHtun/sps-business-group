import Layout from "../components/layout";
import styled from "styled-components";
import HeroOverlayQuotes from "../components/HeroOverlayQuotes";
import Title from "../components/Title";
import Bubble from "../components/Bubble";
import Image from "next/image";
// components
import ExtensionAndGrowth from "../components/ExtensionAndGrowth";
import DistributionChart from "../components/DistributionChart";
import VerticalBar from "../components/RegionalSaleChart";
import Footer from "../components/Footer";
// context api
import { useMenu } from "../context/menuContext";

const images = [
  "/brands/apple.png",
  "/brands/samsung.png",
  "/brands/sony.jpg",
  "/brands/xiaomi.png",
  "/brands/huawei.png",
  "/brands/nokia.jpg",
  "/brands/oppo.png",
  "/brands/vivo.svg",
];

const partners = [
  "/partners/xiaomi.JPG",
  "/partners/camfone.JPG",
  "/partners/honor.JPG",
  "/partners/itel.JPG",
  "/partners/tecno.JPG",
];

export default function Home() {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <Layout>
      <Hero>
        <HeroImage open={menuOpen}>
          <Overlay>
            <HeroOverlayQuotes></HeroOverlayQuotes>
          </Overlay>
        </HeroImage>
      </Hero>
      <Main>
        {/* Bubbles */}

        <Bubble
          color="skyblue"
          size={400}
          position={{ left: -200, top: 100 }}
        ></Bubble>
        <Bubble
          color="salmon"
          size={600}
          position={{ right: -200, top: 300 }}
        ></Bubble>
        {/* Title */}
        <Title title="The brands we carried" position="center"></Title>
        {/* Brands */}
        <Brands>
          {images.map((img, i) => {
            return (
              <Image
                src={img}
                key={i}
                width={80}
                height={80}
                layout="intrinsic"
              ></Image>
            );
          })}
        </Brands>
        {/* extension and growth */}
        <Title title="Extension & Growth" position="flex-end"></Title>
        <ExtensionAndGrowth></ExtensionAndGrowth>
        {/* distribution chart */}
        <Title title="Distribution Model" position="flex-start"></Title>
        {process.browser ? <DistributionChart></DistributionChart> : null}
        {/* distribution msg */}
        <Wrapper>
          <DisCaption>
            "SPS will enable Myanmar Mobile Phone industry with the
            corporations, of above distribution model by addressing the
            industry’s current distribution limitations: product differentiation
            and time-to-market innovation as well as giving the best customer
            service experience."
          </DisCaption>
        </Wrapper>
        {/* Regional Sales Coverage */}
        <Title title="Regional Clients & Coverage" position="flex-end" />
        {process.browser && <VerticalBar></VerticalBar>}
        <Title title="Our partners" position="center" />
        <Brands>
          {partners.map((img, i) => {
            return (
              <Image
                src={img}
                key={i}
                width={80}
                height={80}
                layout="intrinsic"
              ></Image>
            );
          })}
        </Brands>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 100px 200px;
  color: #444444;

  @media only screen and (max-width: 800px) {
    padding: 100px 50px;
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const DisCaption = styled.p`
  text-align: center;
  line-height: 22px;
`;

const Brands = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;

  @media only screen and (max-width: 500px) {
    padding: 2px;
  }
`;

const Blank = styled.div`
  height: 600px;
`;

const Main = styled.div`
  position: relative;
`;

const Hero = styled.section`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  overflow: hidden;
  width: 70vw;
  height: 500px;
  left: 0;
  top: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  /* z-index: 1; */

  @media only screen and (max-width: 800px) {
    height: 500px;
  }
  @media only screen and (max-width: 600px) {
    top: 0;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 500px) {
    /* display: none; */
  }
`;

const HeroImage = styled.div<{ open: boolean }>`
  width: 100vw;
  min-height: 600px;
  height: max-content;
  overflow-x: hidden;
  background: url("/yangon.jpg");
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
