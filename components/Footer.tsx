import styled from "styled-components";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Title>SPS business group</Title>
        <Menu>
          <Link href="#">Profile</Link>
          <Link href="#">About</Link>
          <Link href="#">Career</Link>
        </Menu>
        <Store>
          <p>Check out the available items at </p>
          <Tele>Telemartmyanmar</Tele>
        </Store>
      </Container>
      <Bottom>
        <p>SPS &copy; 2021</p>
        <Sai>
          @ <span>Sai</span>
        </Sai>
      </Bottom>
    </>
  );
};

export default Footer;

const Sai = styled.p`
  position: absolute;
  right: 50px;

  span {
    font-family: "Sacramento", cursive;
  }
`;

const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 400px;
  background-color: #1a1919;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
    font-size: 15px;
    font-weight: 200;
  }
`;

const Title = styled.h3`
  padding: 100px 0px;
  text-align: center;
`;

const Menu = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
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
