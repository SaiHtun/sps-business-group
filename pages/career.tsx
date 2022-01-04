import styled from "styled-components";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import Title from "../components/Title";
import Image from "next/image";
import Bubbles from "../components/Bubbles";
import PhotoGallery from "../components/PhotoGallery";
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from "react";
import { scrollShrinkAnimation } from "../utility/animation";
import client from '../utility/contentfulClient';
import { GetServerSideProps } from 'next'

type Props = {
  data: any
}

const Career: React.FC<Props> = (props) => {
  const conRef = useRef();
  const {hero, team, phoneNumbers} = props.data;

  useEffect(() => {
    scrollShrinkAnimation(conRef.current);
  }, []);

  return (
    <Layout
      title="SPS | Career"
      name="Join the winning team"
      content="SPS promotes personal and professional development, customer
    orientation, teamwork and innovation, without losing sight of our
    commitment to sustainability."
    >
      <Container>
        <HeroImageWrapper ref={conRef}>
          <HeroImage path={hero.fields.file.url}>
            <Overlay>
              <HeroTitle>Join the winning team.</HeroTitle>
              <HeroText>
                {" "}
                <span> Do what you love & </span>
                <br /> <span> create the future you want.</span>
              </HeroText>
            </Overlay>
          </HeroImage>
        </HeroImageWrapper>
        <Wrapper>
          <Title title="SPS Professional Team" position="center"></Title>
          <ParaWrapper>
            <Para>
              Our highly effective, multidisciplinary team of more than 180
              professionals is the key in our industry. It allows our
              organization to progress as a successful, benchmark business
              project, one of the leading mobile phone distributors in Myanmar
              market.
            </Para>
            <Para>
              SPS promotes personal and professional development, customer
              orientation, teamwork and innovation, without losing sight of our
              commitment to sustainability. At the same time, we provide our
              customers with technological excellence and social and human
              progress by offering the latest technology that can bridge the
              digital gap. Our team is respected, developed, and treated with
              mutual respect to attract and retain the best people for our
              clients.
            </Para>
          </ParaWrapper>
          {/* bubbles */}
          <Bubbles></Bubbles>
          <EmployeeContainer>
            <Left>
              <EmTitle>A message from our employee</EmTitle>
              <div className="hide">
                <Image src="/nan.jpg" width={300} height={300}></Image>
              </div>
              <EmMessage>
                "At SPS, you’ll be empowered to work on things that you’re
                passionate about. You’ll be given autonomy. Your ideas will
                matter."
              </EmMessage>
              <Caption>- Nan Win ( Sale's Ops )</Caption>
            </Left>
            <Right>
              <Image src="/nan.jpg" width={300} height={300}></Image>
            </Right>
          </EmployeeContainer>
          <TitleWrapper>
            <Title title="The most diverse workface" position="center"></Title>
          </TitleWrapper>
          {/* masonry */}
          <PhotoGallery images={team}></PhotoGallery>
          <Quote>
            <h3>
              "SPS can easily achieve the goals to be a Distribution Market
              Leader in a year time with the support of our strong distribution
              team."
            </h3>
          </Quote>
        </Wrapper>
      </Container>
      <Push></Push>
      <Footer numbers={phoneNumbers}></Footer>
    </Layout>
  );
};

export default Career;

export const getServerSideProps: GetServerSideProps = async () => {
  const entry = await client.getEntry("dSNN5kvNC5nPI19LIaGFO");
  const phones = await client.getEntry("345dhe02eT5sX9BatoxZAj");

  return {
    props: {
      data: {
        hero: entry.fields.hero,
        team: entry.fields.team,
        phoneNumbers: phones.fields.numbers
      }
    }
  }
}

const Push = styled.div`
  height: 200px;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeroTitle = styled.h2`
  font-size: 4em;
  font-weight: 800;
  margin-bottom: 50px;

  @media only screen and (max-width: 800px) {
    font-size: 3em;
  }
`;

const HeroText = styled.p`
  line-height: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  overflow: hidden;
  width: 70vw;
  height: 500px;
  left: 0;
  top: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 80px;

  @media only screen and (max-width: 800px) {
    height: 500px;
  }
  @media only screen and (max-width: 600px) {
    top: 0;
    width: 100%;
    height: 100%;
    padding-left: 20px;
  }
`;

const TitleWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Quote = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 80px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 300;
  font-style: italic;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 50px 10px;
    font-size: 18px;
    font-weight: 200;
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  color: #444444;
  overflow-x: hidden;
`;

const ParaWrapper = styled.div`
  padding: 0px 100px;
  text-align: center;
  text-indent: 50px;
  line-height: 22px;
  font-size: 16px;

  @media only screen and (max-width: 800px) {
    padding: 0px 50px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 10px;
  }
`;

const Para = styled.p`
  margin-bottom: 20px;
`;

const EmployeeContainer = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  border: 1px solid salmon;
  border-radius: 10px;
  padding: 80px 50px;
  margin: 100px;
  height: max-content;
  display: flex;
  z-index: -1;
  color: #444444;

  @media only screen and (max-width: 800px) {
    margin: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    margin: 100px 5px;
  }
`;

const Left = styled.div`
  flex: 2;

  .hide {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    .hide {
      display: block;
      margin: 50px 0px;
    }
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 800px) {
    flex: 0;
    display: none;
  }
`;

const EmTitle = styled.h3`
  margin-bottom: 50px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0px;
  }
`;

const EmMessage = styled.p`
  text-indent: 20px;
  font-size: 1.5em;
  line-height: 30px;

  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

const Caption = styled.small`
  margin-top: 15px;
  font-style: italic;
  display: block;
  text-align: center;
`;
