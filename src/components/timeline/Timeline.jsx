import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work timelineElement"
        date="2011 - present"
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineer Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Honeywell Tech. Sol.
        </h4>
        <p className="desc">
          Built an automated testing environment using Octopus and Protractor.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
      >
        <h3 className="vertical-timeline-element-title">
          Data Analytics Consulting Virtual Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">KPMG</h4>
        <p className="desc">
          Data Quality Assessment, Data Insights, Data Insights and
          Presentation.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2022"
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Technology at JNTUHCEH
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p className="desc">Computer Science Engineering</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
