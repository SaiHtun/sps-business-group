import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Accomplishment = () => {
  return (
    <Container>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2015"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Accompliishment</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yangon, Myanmar
          </h4>
          <p>
            Our business focus is to be a Distribution Leader of Mobile Phone
            Industry in Myanmar. SPS aggressively expended our Mobile Phone
            Distribution in many different channels including retail,
            wholesales, dealers and partnership. Currently, SPS runs the
            business with over 180 staffs for 5 SPS wholesale shops and MMD
            distribution Channel for both upper and lower Myanmar. Our Sale
            forces cover over 3000 outlets (Nationwide) for device Distribution
            Channel.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          contentStyle={{ background: "salmon", color: "#fff" }}
          iconStyle={{
            background: "salmon",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Accompliishment</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yangon, Myanmar
          </h4>
          <p>
            In year 2014, SPS established our own brand named “X-BO“, “hello”,
            ‘myphone’, “Speed” with various models with 3G capabilities to
            facilitate the needs of its diverse max max-market for low- end
            customer. In the end of 2018 we were also the Distributor of ”Syinix
            Electronics” to the whole Myanmar.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "20px",
            height: "20px",
            marginTop: "25px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Accompliishment</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yangon, Myanmar
          </h4>
          <p>
            So that we expand Distribution Channels are covering more than 3000
            over outlets and expending more. We are trying to grow strong
            distribution channel in 2021. We hope to achieve our goals.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Accomplishment;

const Container = styled.div`
  padding: 100px 0px;
`;
