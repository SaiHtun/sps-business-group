import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const ExtensionAndGrowth: React.FC = () => {
  return (
    <Container>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            color: "#535353",
            border: "3px solid rgb(33, 150, 243)",
            background: "rgba(255,255,255,0.5)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2000"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "rgb(33, 150, 243)",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Started SPS Wholesale Electronics Business.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2005"
          contentArrowStyle={{ borderRight: "7px solid  salmon" }}
          iconStyle={{
            background: "salmon",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
          contentStyle={{
            color: "#535353",
            border: "3px solid salmon",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Expend SPS Wholesale Digital Trading.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{
            color: "#535353",
            border: "3px solid rgb(33, 150, 243)",
            background: "rgba(255,255,255,0.5)",
          }}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            SPS Technology Company Limited is Founded and started running OEM
            Mobile.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016"
          contentArrowStyle={{ borderRight: "7px solid  salmon" }}
          iconStyle={{
            background: "salmon",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
          contentStyle={{
            color: "#535353",
            border: "3px solid salmon",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            * Extended 5 more wholesale shops.
          </h3>
          <h3 className="vertical-timeline-element-title">
            * Became Master Dealer of MEIZUE.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{
            color: "#535353",
            border: "3px solid rgb(33, 150, 243)",
            background: "rgba(255,255,255,0.5)",
          }}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            * Expend to MMD Distribution Channel ( The whole Myanmar ).
          </h3>
          <h3 className="vertical-timeline-element-title">
            * Become the Distributor of Camfone, Oraimo and Syinix.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          contentArrowStyle={{ borderRight: "7px solid  salmon" }}
          iconStyle={{
            background: "salmon",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
          contentStyle={{
            color: "#535353",
            border: "3px solid salmon",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            * Become Sub-Distributor of Xiaomi Official Smartphone.
          </h3>
          <h3 className="vertical-timeline-element-title">
            * Target to expand Retail Chain and Ecommerce.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default ExtensionAndGrowth;

const Container = styled.div`
  overflow: hidden;

  .vertical-timeline-element-date {
    color: #444444 !important;
  }

  .vertical-timeline-element-title {
    font-size: 1.2em;
    font-weight: 400;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;
