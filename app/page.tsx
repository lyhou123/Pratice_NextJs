import Image from "next/image";
import CaroucelComponent from "./component/caroucel";
import CardCompoentCouse from "./component/cardObject";
import CardCompoentIi from "./component/it_newsObject";
export default function Home() {
  return (
    <div>
      <CaroucelComponent/>
    <div className="container mx-auto w-full mb-5">
    <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">COURSES</p>
       <CardCompoentCouse/>
       <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">USE FULL CONTENTS</p>
       </div>
       <div className="flex gap-[20px] justify-center ">
       <CardCompoentIi/>
       </div>
      </div>
  );
}
