import "../../_dist/Services.css";
import ServiceSection from "./ServiceSection";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="bmes__services">
      <ServiceSection
        id="service1"
        banner="/images/banner.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        <h1>Lorem ipsum dolor sit amet, consectetur </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
      </ServiceSection>
      <ServiceSection
        id="service2"
        banner="/images/4.jpg"
        media="https://www.youtube.com/embed/DBnX3bGnlXc"
      >
        <h1>Lorem ipsum dolor sit amet, consectetur </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </ServiceSection>
      <ServiceSection
        id="service3"
        banner="/images/3.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1>Lorem ipsum dolor sit amet, consectetur </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </ServiceSection>
      <ServiceSection
        id="service4"
        banner="/images/1.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1>Lorem ipsum dolor sit amet, consectetur </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </ServiceSection>
      <ServiceSection
        id="service5"
        banner="/images/2.jpg"
        media="https://www.youtube.com/embed/pLE-KYEKGEQ"
      >
        {" "}
        <h1>Lorem ipsum dolor sit amet, consectetur </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </ServiceSection>
    </div>
  );
};

export default Service;
