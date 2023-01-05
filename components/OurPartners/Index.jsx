import Link from 'next/link';
import Image from 'next/image';
import IBM from '../../images/logos/IBM.png';
import Qiskit from '../../images/logos/Qiskit.png';
import CQTech from '../../images/logos/CQTech.png';
import atom from '../../images/shapes/atom.png';
import globe from '../../images/shapes/globe.png';
import computer from '../../images/shapes/computer.png';
import GDGAlgiers from '../../images/shapes/GDGAlgiers.png';
import SectionTitle from '../shared/SectionTitle';
import Bolo from '../../images/logos/1.png';
import Traideas from '../../images/logos/6.png';
import Taxion from '../../images/logos/5.png';
import Hdls from '../../images/logos/2.png';
import IEEE from '../../images/logos/3.png';
import IUT from '../../images/logos/4.png';
import LAB from '../../images/logos/8.png';
import CLUB from '../../images/logos/10.png';
import GAZ from '../../images/logos/9.png';
import { Card } from '../shared/Card';
import YellowButton from '../shared/YellowButton';

const OurPartners = () => {
  const partners = [
    {
      text: 'Qiskit is an open-source software development kit (SDK) for working with quantum computers at the level of circuits, pulses, and algorithms. It provides tools for creating and manipulating quantum programs and running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer',
      src: Bolo,
    },
  ];
  return (
    <section id="our-partners" className="section-container pt-12 lg:pt-24">
      <SectionTitle title={'Co-organizer'} />
      <div className="flex flex-row">
        <div className=" w-1/12">
          <div className=" flex lg:flex"></div>
        </div>
        <div className="w-10/12">
          <div className="">
            <div className="lg:mx-80 md:mx-auto">
              <div className="flex justify-center">
                <Image src={Bolo} width={500} height={500} />
              </div>
              {/* <YellowButton title={'BOLO'} /> */}
            </div>
          </div>
        </div>
      </div>
      <SectionTitle title={'Technical Partner'} />
      <div className="mx-auto max-w-screen-md mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          <div>
            <Image src={Traideas} width={500} height={500} />
            {/* <YellowButton title={'Traideas'} /> */}
          </div>
          <div>
            <Image src={Taxion} width={500} height={500} />
            {/* <YellowButton title={'TEXON'} /> */}
          </div>
        </div>
      </div>
      <SectionTitle title={'Outreach Partner'} />
      <div className="mx-auto max-w-screen-md mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
          <div>
            <Image src={Hdls} width={500} height={500} />
            {/* <YellowButton title={'HTL'} /> */}
          </div>
          <div>
            <Image src={IEEE} width={500} height={500} />
            {/* <YellowButton title={'IEEE EWU'} /> */}
          </div>
          <div>
            <Image src={IUT} width={500} height={500} />
            {/* <YellowButton title={'IEEE IUT'} /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div>
            <Image src={LAB} width={500} height={500} />
            {/* <YellowButton title={'01 Lab'} /> */}
          </div>
          <div>
            <Image src={CLUB} width={500} height={500} />
            {/* <YellowButton title={'DUET CLUB'} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
