import Image from 'next/image';
import Link from 'next/link';
import Qiskit from '../../images/logos/Qiskit.svg';
import WTMWHITE from '../../images/logos/quantum-logo.png';
import GDGWHITE from '../../images/logos/GDGAlgiers-white.png';
import GlobeShape from '../../images/shapes/globe.png';
import AlgeriaSymbol from '../../images/shapes/GDGAlgiers.png';
import { socialsMedia, links } from './data';
import Tilt from 'react-parallax-tilt';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="footer-bg text-qiskit-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src={WTMWHITE} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Quantum.ai is organizing a Conference Event titled “AI Startup Summit
          2023 – Connect, Learn & Explore The Opportunities”. It will be
          one-week long virtual conference in order to explore the opportunities
          for building AI based Startups in the Bangladeshi ecosystem.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75">
                About
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75">
                Careers
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75">
                History
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75">
                Speakers
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
