import Image from "next/image";
import WTM from "../../images/logos/WTMAlgiers.png";
import SectionTitle from "../shared/SectionTitle";
import GDG from "../../images/logos/GDGAlgiers.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}
      <div className="relative about-bg py-16">
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"WTM Algiers "}
              paragraph1={`also known as the "Women Techmakers Algiers" program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at`}
              keyword2={" the National Higher School of Computer science "}
              paragraph2={`and dedicated to anyone who's passionate and motivated about the tech field.`}
              img={WTM}
              reverse={false}
              redirect={"https://www.wtmalgiers.org/"}
            ></ParagSection>
            <ParagSection
              keyword1={"GDG Algiers "}
              paragraph1={`is a local group of developers and students who are interested in Google’s developer technology products. It is located at`}
              keyword2={" the National Higher School of Computer science "}
              paragraph2={`and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates.`}
              img={GDG}
              reverse={true}
              redirect={"https://www.gdgalgiers.com"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
