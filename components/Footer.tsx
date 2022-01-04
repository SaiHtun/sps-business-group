import styled from "styled-components";
import Link from "next/link";

const Footer = ({numbers}) => {
  return (
    <>
      <Container>
        <Title>SPS business group</Title>
        <PhoneWrapper>
          { numbers.map((num, i) => <Phone key={i}>{num}</Phone>)}
        </PhoneWrapper>
        <Store>
          <p>Check out the available items at </p>
          <Link href="http://telemartmyanmar.com">
            <Tele>Telemartmyanmar</Tele>
          </Link>
        </Store>
        <Bottom>
          <p>SPS &copy; 2021</p>
          <Sai>
            @ <span>Sai</span>
          </Sai>
        </Bottom>
      </Container>
    </>
  );
};

export default Footer;

const PhoneWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Phone = styled.p`
  margin-bottom: 10px;
`;

const Sai = styled.p`
  position: absolute;
  right: 20px;

  span {
    font-family: "Sacramento", cursive;
  }
`;



const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  margin-top: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #1a1919;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 500px) {
    font-size: 15px;
    font-weight: 200;
  }
`;

const Title = styled.h3`
  padding: 80px 0px;
  text-align: center;
`;

const Store = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 800px) {
    gap: 5px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;

    p {
      margin-bottom: 5px;
    }
  }
`;

const Tele = styled.div`
  display: inline-block;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }

  :hover {
    color: salmon;
    border: 1px solid salmon;
  }
`;
