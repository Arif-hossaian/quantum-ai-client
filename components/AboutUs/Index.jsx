import Image from 'next/image';
//import WTM from '../../images/logos/WTMAlgiers.png';
import WTM from '../../images/logos/1.png';
import SectionTitle from '../shared/SectionTitle';
//import GDG from '../../images/logos/GDGAlgiers.png';
import GDG from '../../images/logos/2.png';
import ParagSection from '../shared/ParagSection';
import globe from '../../images/shapes/globe.png';
import maqam from '../../images/shapes/MaqamWhite.png';
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}
      <div className="relative about-bg py-16">
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={'About the Event'} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={'”AI Startup Summit -2023”'}
              paragraph1={` is a week-long conference event will be held between January 13 –
              January 20, 2023. The main focus of this conference is to explore the opportunity of building AI
              based startups for the Bangladeshi ecosystem. As Quantum.ai is working on the education of
              Machine Learning, Data Science fields, we want our students and participants to learn about
              implementing the AI knowledge to work on AI based products and services and gather more
              experience on this domain.`}
              img={WTM}
              reverse={false}
            ></ParagSection>
            <ParagSection
              paragraph1={`In Bangladesh, many startup founders are highly motivated to transform the existing startup
              ecosystem by developing the AI based products and services. Some of the remarkable AI based
              Startups in Bangladesh are – `}
              keyword2={
                'Intelligent Machines Ltd, Zantrik, Medina Tech, Bengali.ai, Headless Technologies Ltd, Socian Ltd, etc.'
              }
              img={GDG}
              reverse={true}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
