import styled from "styled-components";
import Bubble from "./Bubble";

const Bubbles = () => {
  return (
    <>
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
      <Bubble
        color="salmon"
        size={150}
        position={{ left: 300, top: 400 }}
      ></Bubble>
      {/* remover */}
      <Remover>
        <Bubble
          color="skyblue"
          size={150}
          position={{ right: 300, top: 800 }}
        ></Bubble>
        <Bubble
          color="salmon"
          size={600}
          position={{ left: -100, top: 1000 }}
        ></Bubble>
        <Bubble
          color="skyblue"
          size={200}
          position={{ left: 400, top: 1600 }}
        ></Bubble>
        <Bubble
          color="skyblue"
          size={250}
          position={{ right: 200, top: 1800 }}
        ></Bubble>
        <Bubble
          color="salmon"
          size={600}
          position={{ left: -100, top: 1000 }}
        ></Bubble>
        <Bubble
          color="skyblue"
          size={600}
          position={{ right: -100, top: 1600 }}
        ></Bubble>

        <Bubble
          color="salmon"
          size={600}
          position={{ left: -100, bottom: 1500 }}
        ></Bubble>
        <Bubble
          color="skyblue"
          size={600}
          position={{ right: -100, bottom: 1000 }}
        ></Bubble>
        <Bubble
          color="salmon"
          size={500}
          position={{ right: -200, bottom: 300 }}
        ></Bubble>
      </Remover>
      <Bubble
        color="skyblue"
        size={300}
        position={{ left: -100, bottom: 100 }}
      ></Bubble>
      <Bubble
        color="skyblue"
        size={200}
        position={{ right: 500, bottom: 0 }}
      ></Bubble>
      <Bubble
        color="skyblue"
        size={400}
        position={{ right: 200, bottom: 0 }}
      ></Bubble>
    </>
  );
};

export default Bubbles;

const Remover = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
