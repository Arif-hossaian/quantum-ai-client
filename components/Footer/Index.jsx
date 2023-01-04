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
    <footer className="mt-32 footer-bg text-qiskit-white flex flex-col gap-6 relative">
      <div className="flex flex-col items-center lg:items-start lg:flex-row">
        <div className="pt-14 pl-4 pr-4 lg:pl-11 lg:pr-0 2xl:pl-16">
          <div className="flex flex-col gap-6">
            {/* LOGOS */}
            <div className="flex items-center gap-7">
              <div className="cursor-pointer">
                <Image src={WTMWHITE} />
              </div>
            </div>
            {/* MAIN */}
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex lg:w-2/6 flex-col lg:gap-14">
                <p className="hidden lg:flex font-light text-[0.9375rem] 2xl:text-xl">
                  A community of creative spirits that aims to help others learn
                  and explore the tech domain{' '}
                </p>

                <div className="flex gap-10 justify-center items-center lg:justify-start">
                  {socialsMedia.map((socialMedia, idx) => {
                    return (
                      <a
                        href={socialMedia.redirect}
                        target="__blank"
                        key={idx}
                        className="cursor-pointer"
                      >
                        <Image src={socialMedia.logo} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hidden lg:flex gap-9 flex-1 justify-between">
                {links.map((link, idx1) => {
                  return (
                    <ul key={idx1}>
                      <li className="font-semibold mb-6">{link.linkName}</li>
                      <div className="flex flex-col gap-6">
                        {link.content.map((cont, idx2) => {
                          return (
                            <Link href={cont.redirect} key={idx1 * idx2 + 1}>
                              <li className="text-[0.9375rem] hover:text-qiskit-yellow transition-all duration-500 2xl:text-xl cursor-pointer">
                                {cont.name}
                              </li>
                            </Link>
                          );
                        })}
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <div className="flex justify-center px-4">
        <p className="text-[0.9375rem] pb-2 text-center">
          Copyright © 2023 Developed by <a target='_blank' href='https://www.traideas.com'  rel="noreferrer" className='text-lg'>Traideas</a> . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
