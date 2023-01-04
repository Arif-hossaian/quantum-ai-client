import SectionTitle from "../shared/SectionTitle";
import { agenda } from "./agenda";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import computer from "../../images/shapes/computer.png";
import YellowButton from "../shared/YellowButton";

const Agenda = () => {
  return (
    <section id="agenda" className="relative section-container">
      <SectionTitle title={"Agenda"}> </SectionTitle>
      <div className="md:grid grid-cols-6 flex flex-col justify-center relative">
        <div className=" md:flex flex-col hidden md:visible">  
        </div>
        <div className="col-span-4 flex flex-col justify-center mt-[20px]">
          <YellowButton title={"Saturday, October 22nd"} />
          <div className=" bg-qiskit-blue-lighter  bg-opacity-40 justify-center w-full md:pl-[50px] pl-[10px] mb-20 pr-[10px] md:pr-[30px] lg:py-[80px] md:py[70px] py-8 border-4 md:border-8 md:mt-[-30px] mt-[-10px]">
            <div className="">
              <div className=" sm:text-xl font-medium md:font-semibold text-xs md:px[10px] ">
                <div className="flew flex-row">
                  {agenda.map((agendaInfo, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-row justify-stretch mx-auto "
                      >
                        <div className="flex flex-none py-2.5 md:pl-10">
                          <div className="">{agendaInfo.Time}</div>
                        </div>
                        <div className="flex pl-2 md:pl-10 py-2.5 ">
                          <div className="">{agendaInfo.event}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default Agenda;
