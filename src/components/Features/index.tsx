import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Fade, Reveal, Flip } from "react-awesome-reveal";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <Fade direction="up">
            <SectionTitle
              title="Our Services"
              paragraph="We provide data-driven solutions, training, and workforce services to help businesses grow, enhance skills, and achieve success."
              center
            />
          </Fade>
          
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Features;
