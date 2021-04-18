import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const array = [
  {
    title: "About Us",
    text:
      "SPS Technology Co., Ltd. established in September 2010. The company headquartered in No.130, 7th floor, 23rd Street, Upper Block, LathaTownship, Yangon, Myanmar. Our company’s core business is in both retail, wholesales and distributions for multi-brand of mobile phone and it’s accessories, spare parts.",
  },
  {
    title: "Our Values",
    list: [
      "We put our customers first.",
      "We act with honesty.",
      "We keep things simple.",
      "We do what we say.",
    ],
  },
  {
    title: "Our vision",
    text:
      " We are moving unitedly forward with the best performance, the best service, and the best organization to get the greatest success in Myanmar Market.",
  },
  {
    title: "Our Mission",
    text:
      "We are looking forward for the success of employees, the success of business partners and also the success of company by friendly smile, authentic quality and advance technology.",
  },
];

export default function HeroOverlayQuotes() {
  const [item, setItem] = useState(array[0]);
  const timeRef = useRef(0);
  const quoteRef = useRef();

  useEffect(() => {
    setInterval(() => {
      if (timeRef.current >= 3) {
        timeRef.current = 0;
        setItem(array[timeRef.current]);
      } else {
        timeRef.current = timeRef.current + 1;
        setItem(array[timeRef.current]);
      }
    }, 5000);
  }, []);

  useEffect(() => {
    gsap.from(quoteRef.current, { opacity: 0, xPercent: 10, duration: 1.2 });
  }, [item]);

  const handleMore = () => {
    console.log("more more babe!");
  };

  return (
    <Container>
      <Quote ref={quoteRef}>
        <h3>{item?.title}</h3>
        {item.list ? (
          <ul>
            {item &&
              item?.list.map((li, i) => {
                return <li key={i}>{li}</li>;
              })}
          </ul>
        ) : (
          <p>{item?.text}</p>
        )}
      </Quote>
      <MoreAboutBtn onClick={() => handleMore()}>More about us</MoreAboutBtn>
    </Container>
  );
}

const MoreAboutBtn = styled.button`
  width: 170px;
  height: 50px;
  font-size: 1.2em;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  z-index: 100;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: salmon;
    border: 2px solid salmon;
  }

  @media only screen and (max-width: 600px) {
    right: 30px;
  }
  @media only screen and (max-width: 500px) {
    width: 150px;
    font-size: 1em;
    right: 45%;
    bottom: 60px;
    margin-right: -50px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;
`;

const Quote = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    margin-left: 30px;
    line-height: 35px;
    font-size: 1.3em;
  }

  h3 {
    font-size: 5em;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
  }

  p {
    line-height: 30px;
    font-size: 1.3em;
    color: #dddddd;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px 50px;

    h3 {
      font-size: 3.5em;
    }

    p {
      font-size: 1.2em;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 20px;

    h3 {
      font-size: 2.5em;
    }

    p,
    ul {
      font-size: 1em;
      line-height: 25px;
    }
  }
`;
