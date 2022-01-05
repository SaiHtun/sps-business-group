import Layout from "../components/layout";
import styled from "styled-components";
import HeroOverlayQuotes from "../components/HeroOverlayQuotes";
import Title from "../components/Title";
import Bubbles from "../components/Bubbles";
import Image from "next/image";
// components
import ExtensionAndGrowth from "../components/ExtensionAndGrowth";
import Footer from '../components/Footer';
import RegionalSaleChart from "../components/RegionalSaleChart";
import HeroImage from "../components/HeroImage";
import { useState, useEffect, useRef } from "react";
import { scrollShrinkAnimation } from "../utility/animation";
import client from '../utility/contentfulClient';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const DynamicDistriChart = dynamic(() => import("../components/DistributionChart"), {
  ssr: false,
});

export default function Home(props) {
  const conRef = useRef();
  const {hero, brandimages, partnerimages, phoneNumbers } = props.data;

  useEffect(() => {
    scrollShrinkAnimation(conRef.current);
  }, []);

  return (
    <Layout
      title="SPS business group"
      name="SPS business group"
      content="SPS will enable Myanmar Mobile Phone industry with the
    corporations, of above distribution model by addressing the
    industry’s current distribution limitations: product
    differentiation and time-to-market innovation as well as giving
    the best customer service experience."
    >
      <Container>
        <Hero>
          <HeroImageWrapper ref={conRef}>
            <HeroImage path={hero.fields.file.url}>
              <Overlay>
                <HeroOverlayQuotes></HeroOverlayQuotes>
              </Overlay>
            </HeroImage>
          </HeroImageWrapper>
        </Hero>
        <Main>
          {/* Bubbles */}
          <Bubbles></Bubbles>

          {/* Title */}
          <Title title="The brands we carried" position="center"></Title>
          {/* Brands */}
          <Brands>
            {brandimages.map((img, i) => {
              return (
                <Image
                  src={img.fields.file.url}
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
          <ChartWrapper>
            <DynamicDistriChart></DynamicDistriChart>
          </ChartWrapper> 
          {/* distribution msg  */}
          <Wrapper>
            <DisCaption>
              "SPS will enable Myanmar Mobile Phone industry with the
              corporations, of above distribution model by addressing the
              industry’s current distribution limitations: product
              differentiation and time-to-market innovation as well as giving
              the best customer service experience."
            </DisCaption>
          </Wrapper>
          {/* Regional Sales Coverage */}
          <Title
            title="Regional Coverage and Clients"
            position="flex-end"
          ></Title>
          <ChartWrapper>
            <RegionalSaleChart></RegionalSaleChart>
          </ChartWrapper>
          <Title title="Our partners" position="center" />
          <Brands>
            {partnerimages.map((img, i) => {
              return (
                <Image
                  src={img.fields.file.url}
                  key={i}
                  width={80}
                  height={80}
                  layout="intrinsic"
                ></Image>
              );
            })}
          </Brands>
        </Main>
      </Container>
      <Push></Push>
      <Footer numbers={phoneNumbers}></Footer>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const entry = await client.getEntry("23Y6vLog4beD58ye26cgW5");
  const phones = await client.getEntry("345dhe02eT5sX9BatoxZAj");

  return {
    props: {
      data: {
        hero: entry.fields.hero,
        brandimages: entry.fields.brandimages,
        partnerimages: entry.fields.partnerimages,
        phoneNumbers: phones.fields.numbers
      }
    }
  }

}

const HeroImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: -10;
`;

const Container = styled.div`
  height: 100%;
`;

const Push = styled.div`
  height: 200px;
`;


const ChartWrapper = styled.div`
  margin-bottom: 100px;
`;

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

  @media only screen and (max-width: 800px) {
    height: 500px;
  }
  @media only screen and (max-width: 600px) {
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
