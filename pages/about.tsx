import styled from "styled-components";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import Title from "../components/Title";
import Accomplishment from "../components/about/Accomplishment";
import OrgChart from "../components/about/OrgChart";

const About = () => {
  return (
    <Layout>
      <Container>
        <HeroImage path="/team.JPG"></HeroImage>
        <Title title="History in the making" position="center" />
        <Wrapper>
          <Message>
            <p>
              Since 2000, before we started to reform SPS Co., Ltd, we were in
              electronic business as “SPS Electronics“ in Yangon doing both
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
          {process.browser ? <OrgChart></OrgChart> : null}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default About;

const Wrapper = styled.div`
  padding: 0px 100px;

  @media only screen and (max-width: 800px) {
    padding: 0px 80px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const Container = styled.div`
  height: 100%;
  margin-bottom: -50px;
`;

const Message = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px;
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
