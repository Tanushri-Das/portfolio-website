import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  // Define timeline line color dynamically based on theme
  const lineColor = theme === "dark" ? "#fff" : "rgb(71 85 105)"; // slate-700 in light theme, white in dark

  return (
    <section id="experience" className="mt-20">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-10">
        Experience
      </h2>
      <VerticalTimeline
        lineColor={lineColor} // Use the dynamic line color here
      >
        {/* Timeline Item 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor:
              theme === "dark" ? "rgb(71 85 105)" : "rgb(243 244 246)", // slate-700 for dark, gray-100 for light
            color: theme === "dark" ? "#fff" : "rgb(55 65 81)", // white for dark, slate-700 for light
          }}
          contentArrowStyle={{
            borderRight:
              theme === "dark"
                ? "7px solid rgb(71 85 105)"
                : "7px solid rgb(243 244 246)", // slate-700 for dark, gray-100 for light
          }}
          date="February 2023 - April 2023"
          iconStyle={{
            background: "rgb(71 85 105)", // Background color for the icon
            color: "#fff", // Icon color
            border: "none", // Ensure no border by default
          }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-[16px]">
            Salesqueen Software Solutions (Remote)
          </h4>
          <p
            className={`text-[16px] mt-2 font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}
          >
            Implemented frontend designs using HTML, CSS, JavaScript, and
            Bootstrap, enhancing user experience and improving site performance.
          </p>
        </VerticalTimelineElement>

        {/* Timeline Item 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor:
              theme === "dark" ? "rgb(71 85 105)" : "rgb(243 244 246)", // slate-700 for dark, gray-100 for light
            color: theme === "dark" ? "#fff" : "rgb(55 65 81)", // white for dark, slate-700 for light
          }}
          contentArrowStyle={{
            borderRight:
              theme === "dark"
                ? "7px solid rgb(71 85 105)"
                : "7px solid rgb(243 244 246)", // slate-700 for dark, gray-100 for light
          }}
          date="May 2024 - June 2024"
          iconStyle={{
            background: "rgb(71 85 105)", // Background color for the icon
            color: "#fff", // Icon color
            border: "none", // Ensure no border by default
          }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Frontend Developer (React.js)
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-[16px]">
            GlobFluent VidyaTech Pvt. Ltd. (Remote)
          </h4>
          <p className={`text-[16px] mt-2 font-normal ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-[#737373]"
            }`}>
            Worked with React.js, Tailwind CSS, Swiper.js, and TypeScript to
            build responsive user interfaces, including sign-in/signup
            functionality with API integration.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
