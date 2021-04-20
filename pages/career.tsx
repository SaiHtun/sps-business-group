import styled from "styled-components";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import Title from "../components/Title";
import Image from "next/image";
import Bubbles from "../components/Bubbles";
import PhotoGallery from "../components/PhotoGallery";

const images = [
  {
    path: "/team/one.jpg",
    height: "300px",
  },
  {
    path: "/team/two.jpg",
    height: "400px",
  },
  {
    path: "/team/three.jpg",
    height: "600px",
  },
  {
    path: "/team/four.jpg",
    height: "500px",
  },
  {
    path: "/team/one.jpg",
    height: "300px",
  },
  {
    path: "/team/five.jpg",
    height: "200px",
  },
  {
    path: "/team/six.jpg",
    height: "300px",
  },
  {
    path: "/team/seven.jpg",
    height: "600px",
  },
  {
    path: "/team/eight.jpg",
    height: "500px",
  },
  {
    path: "/team/nine.jpg",
    height: "400px",
  },
  {
    path: "/team/ten.jpg",
    height: "300px",
  },
  {
    path: "/team/meizu2.jpg",
    height: "300px",
  },
];

const Career: React.FC = () => {
  return (
    <Layout>
      <Container>
        <HeroImage path="/team/meizu1.JPG"></HeroImage>
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
          <PhotoGallery images={images}></PhotoGallery>
          <Quote>
            <h3>
              "SPS can easily achieve our goals to be a Distribution Market
              Leader in a year time with the support of our strong distribution
              team."
            </h3>
          </Quote>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Career;

const TitleWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Quote = styled.div`
  width: 100%;
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
`;

const Container = styled.div`
  color: #444444;
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
