import React from "react";
import styled from "styled-components";
import { Bar, Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "Mandalay",
    "Yangon",
    "Mawlamyine",
    "Taunggyi",
    "Meikthila",
    "Kalay",
    "Lashio",
    "Monywa",
    "Kachin State",
    "Magway",
  ],
  datasets: [
    {
      label: "Clients",
      data: [452, 1563, 256, 266, 231, 120, 121, 422, 488, 75],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(79, 218, 86, 0.2)",
        "rgba(182, 56, 144, 0.2)",
        "rgba(95, 42, 55, 0.2)",
        "rgba(120, 34, 170, 0.2)",
        "rgba(31, 116, 119, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(79, 218, 86, 1)",
        "rgba(182, 56, 144, 1)",
        "rgba(95, 42, 55, 1)",
        "rgba(120, 34, 170, 1)",
        "rgba(31, 116, 119, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options1 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio: false,
};

const options2 = {
  responsive: true,
  maintainAspectRatio: false,
};

const VerticalBar = () => (
  <Container>
    <Wrapper>
      <Bar data={data} options={options1} />
    </Wrapper>
    {/* <div style={{ height: "50px" }}></div> */}
    <Wrapper>
      <Doughnut data={data} options={options2} />
    </Wrapper>
  </Container>
);

export default VerticalBar;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    padding: 0px 80px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 50px;
    gap: 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 20px;
  }
`;
