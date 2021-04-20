import styled from "styled-components";

type Props = {
  title: string;
  text: string;
};

const Para: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default Para;

const Container = styled.div`
  position: relative;
  color: #444444;
  margin-bottom: 100px;

  @media only screen and (max-width: 500px) {
    margin-left: 10px;
    margin-bottom: 50px;
  }

  ::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: salmon;

    @media only screen and (max-width: 500px) {
      left: -10px;
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const Text = styled.p`
  line-height: 23px;
  color: #575757;
  text-indent: 20px;
  font-size: 18px;
  font-weight: 300;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
