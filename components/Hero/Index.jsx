import Image from 'next/image';
import Navbar from './Navbar';
import Qiskit from '../../images/logos/QiskitHero.png';
import Arrow from '../../images/shapes/Arrow.png';
import GDGAlgiers from '../../images/logos/GDGAlgiers-white.png';
import CounterContainer from './CounterContainer';
import Maqam from '../../images/shapes/MaqamWhite.png';
import Atom from '../../images/shapes/atomWhite.png';
import Globe from '../../images/shapes/globe.png';
import Computer from '../../images/shapes/computerWhite.png';
import Purpulebutton from '../shared/Purpulebutton';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <div className="flex flex-col gap-16 lg:gap-0 relative">
         
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-black">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ['Qiskit | Fall Fest Algiers'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Your chance to discover the Quantum Computing world!
              </p>
              <div className="flex items-end">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" alt="" />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px] cursor-not-allowed">
                  <Purpulebutton title={'Register Now!'} />
                </div>
              </div>
            </div>

            <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <Image src={Qiskit} alt="" />
              </Tilt>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <CounterContainer countDownLimit={1666425600000} />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
