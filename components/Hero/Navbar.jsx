import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WTMAlgiers from '../../images/logos/quantum-logo.png';
import NavLinks from './links';
import Bluebutton from '../shared/Bluebutton';
const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <header className="pt-8 lg:pt-1 flex flex-col gap-8 relative">
      {/* Desktop menu */}
      <div>
        <div className="flex justify-between items-center">
          <div className="mt-3">
            <Image
              src={WTMAlgiers}
              alt="WTM Algiers"
              width={180}
              height={50}
              className=""
            />
          </div>
          <ul className="hidden lg:flex items-center text-xl gap-16 font-medium 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <Link key={idx} href={navLink.redirect}>
                  <li className="cursor-pointer hover:text-qiskit-yellow transition-all duration-500">
                    <p className="text-red-600">{navLink.content}</p>
                  </li>
                </Link>
              );
            })}
          </ul>

          <div
            onClick={() => setIsNavToggled(!isNavToggled)}
            className="flex flex-col cursor-pointer gap-2 lg:hidden"
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
          <ul className="flex flex-col items-center text-xl gap-16 font-medium  2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <Link key={idx} href={navLink.redirect}>
                  <li className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow">
                    {navLink.content == 'Home' && (
                      <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                    )}
                    <p>{navLink.content}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
