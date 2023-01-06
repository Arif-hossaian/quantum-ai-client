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
import Bolo from '../../images/clients/1.png';
import Traideas from '../../images/clients/6.png';
import Taxion from '../../images/clients/5.png';
import Hdls from '../../images/clients/2.png';
import IEEE from '../../images/clients/3.png';
import IUT from '../../images/clients/4.png';
import LAB from '../../images/clients/8.png';
import CLUB from '../../images/clients/10.png';
import GAZ from '../../images/clients/9.png';
import { clientsData } from './data';

const OurPartners = () => {
  const partners = [
    {
      text: 'Qiskit is an open-source software development kit (SDK) for working with quantum computers at the level of circuits, pulses, and algorithms. It provides tools for creating and manipulating quantum programs and running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer',
      src: Bolo,
    },
  ];
  return (
    <section id="our-partners" className="section-container pt-12 lg:pt-24">
      <div>
        <SectionTitle title={'Event Partners'} />
        <p className="text-2xl font-bold text-center">Co-organizer</p>
        <div className="flex justify-center items-center text-center mt-10">
          <img
            src="https://i.ibb.co/JmmvMCP/1.png"
            alt="logos"
            style={{ height: '180px' }}
          />
        </div>

        <p className="text-2xl text-center font-bold mt-10">
          Technical Partner
        </p>
        <div className="mx-auto max-w-screen-sm px-16 md:grid lg: md:grid-cols-2 lg:grid-cols-2 flex flex-row  items-center">
          <div>
            <img
              src="https://i.ibb.co/BKXCCTB/6.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/dGTNFFh/5.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
        </div>
        <p className="text-2xl text-center font-bold mt-10">Outreach Partner</p>
        <div className="mx-auto max-w-screen-sm flex flex-col md:flex-row lg:flex-row items-center">
          <div>
            <img
              src="https://i.ibb.co/z8nt5BK/2.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/Dwrtd3z/3.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/1sYjxrQ/4.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/5KN5tq9/8.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/WnWBFgh/10.png"
              alt="logos"
              style={{ height: '180px' }}
            />
          </div>
        </div>
        <p className="text-2xl font-bold text-center">Magazine Partner</p>
        <div className="flex justify-center items-center text-center mt-10">
          <img
            src="https://i.ibb.co/dQXVRYQ/9.png"
            alt="logos"
            style={{ height: '180px' }}
          />
        </div>
        {/* <div className="mx-auto max-w-screen-lg px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  text-center mt-16">
          {clientsData.map((content, _id) => (
            <div key={_id}>
              <img src={content.src} alt="logos" style={{ height: '180px' }} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OurPartners;
