import styled from "styled-components";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import Title from "../components/Title";
import Accomplishment from "../components/about/Accomplishment";
import React from "react";
import Para from "../components/about/Para";
import { scrollShrinkAnimation } from "../utility/animation";
import Bubbles from "../components/Bubbles";
import PhotoGallery from "../components/PhotoGallery";
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from "react";
import client from '../utility/contentfulClient';
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic';

const DynamicOrgChart = dynamic(() => import('../components/about/OrgChart'), {
  ssr: false,
})

const paras = [
  {
    title: "strategic alignment",
    text:
      "The relationship that exists between the business and IT organizations is another criterion that ranks high among the enablers and inhibitors. SPS is open for the opportunity to have an equal role in defining business strategies is obviously important. We believe, how each organization perceives the contribution of the other, the trust that develops among the participants, ensuring appropriate business sponsors and champions of IT endeavors, and the sharing of risks and rewards are all major contributors to mature our strategic alignment. This partnership should evolve to a point where all the parties enables success in both business processes and strategies.",
  },
  {
    title: "communications",
    text:
      "Effective exchange of ideas and a clear understanding of what it takes to ensure successful strategies are high on the list of enablers and inhibitors to alignment. SPS always give the dynamic environment in which most organizations find themselves, ensuring ongoing knowledge sharing across organizations is paramount. SPS is happy to draw on liaisons to facilitate this knowledge sharing and good communication.",
  },
  {
    title: "skills",
    text:
      "Skills include all of the human resource considerations for the organization. SPS always goes beyond the traditional considerations such as training, salary, performance feedback, and career. Innovation is dependent on the business unit, but it needed to be built by knowledge sharing and creative thinking of individuals. Management style is dependent on the business unit, but is usually command and control. Training is encouraged but left up to the individual employee. Our team is respected, developed, and treated with mutual respect to attract and retain the best people for our clients.",
  },
];


const About = (props) => {
  const conRef = useRef();
  const [ show, setShow ] = useState(false);
  const {hero, stores, phoneNumbers} = props.data;

  useEffect(() => {
    scrollShrinkAnimation(conRef.current);
  }, []);


  return (
    <Layout
      title="SPS | About"
      name="History of SPS"
      content=" we emphasized the business mostly
    on Wholesale and Distribution channel. So we established our MMD
    Distribution Channel to both upper and lower Myanmar in 2017."
    >
      <Container>
        <HeroImageWrapper ref={conRef}>
          <HeroImage path={hero.fields.file.url}></HeroImage>
        </HeroImageWrapper>
        <Title title="History in the making" position="center" />
        <Wrapper>
          <Bubbles></Bubbles>
          <Message>
            <p>
              Since 2000, before we started to reform SPS Co., Ltd, we were in
              electronic business as ???SPS Electronics??? in Yangon doing both
              retail and whole sales. In 2012, We proudly gained successful
              customer relationship and decided to expend our business into
              Mobile Phone Business Industry. Our sales and success in Mobile
              Phone industry is increasing amazing. In 2016, we became the
              master dealer of MEIZU smart phones. We do selling as well as
              giving well after service to meet customer satisfaction. As our
              Business extension and uprising the sales-forces, maximizing the
              customers and interrelationship, we emphasized the business mostly
              on Wholesale and Distribution channel. So we established our MMD
              Distribution Channel to both upper and lower Myanmar in 2017.
            </p>
          </Message>
          {/* Accomplishment */}
          <Accomplishment></Accomplishment>
          {/* Org chart */}
          <OrgWrapper>
            <DynamicOrgChart></DynamicOrgChart>
          </OrgWrapper>
          {/* paragraphs */}
        </Wrapper>
        <ParaWrapper>
          {paras.map((p, i) => {
            return <Para key={i} title={p.title} text={p.text}></Para>;
          })}
        </ParaWrapper>
        <TitleWrapper>
          <Title title="Our retail stores" position="center"></Title>
        </TitleWrapper>
        <PhotoGallery images={stores}></PhotoGallery>
        <Quote>
          <h3>
            "SPS is one of the market leader in Mobile Phone Wholesale and
            Distribution in Myanmar."
          </h3>
        </Quote>
      </Container>
      <Push></Push>
      <Footer numbers={phoneNumbers}></Footer>
    </Layout>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const entry = await client.getEntry("VTGe5N72Q2d1kLDAWVMv7");
  const phones = await client.getEntry("345dhe02eT5sX9BatoxZAj");

  return {
    props: {
      data: {
        hero: entry.fields.hero,
        stores: entry.fields.stores,
        phoneNumbers: phones.fields.numbers
      }
    }
  }

}

const HeroImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Push = styled.div`
  height: 200px;
`;

const OrgWrapper = styled.div``;

const ParaWrapper = styled.div`
  padding: 100px 100px 0px 100px;

  @media only screen and (max-width: 800px) {
    padding: 50px 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 50px 10px;
  }
`;

const Wrapper = styled.div`
  padding: 0px 100px;
  position: relative;

  @media only screen and (max-width: 800px) {
    padding: 0px 80px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const Container = styled.div``;

const Message = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  color: whitesmoke;
  text-align: center;

  @media only screen and (max-width: 500px) {
    padding: 50px 10px;
  }

  p {
    line-height: 30px;
  }
`;

const Quote = styled.div`
  width: 100%;
  padding: 80px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 300;
  font-style: italic;
  overflow: hidden;

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
