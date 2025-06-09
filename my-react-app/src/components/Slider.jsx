import React from 'react';
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div className="h-[430px] sm:h-110 xl:h-[480px] 2xl:h-96 ">
      <Carousel>

        {/* Slide 1 */}
        <div
          className="relative h-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img.jpeg')" }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
         
         
          <div className="relative z-10 flex flex-col justify-center h-full px-[60px] lg:px-[100px] text-center lg:text-left lg:items-start items-center">


            <h2 className="text-3xl font-bold mb-2">Heading 1</h2>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum eveniet quasi impedit saepe deleniti praesentium.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="relative h-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img2.jpeg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full px-[60px] lg:px-[100px] text-center lg:text-left lg:items-start items-center">

            <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
            <p className="text-base whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum eveniet quasi impedit saepe deleniti praesentium.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="relative h-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img3.jpeg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full px-[60px] lg:px-[100px] text-center lg:text-left lg:items-start items-center">

            <h2 className="text-3xl font-bold mb-2">Heading 3</h2>
            <p className="text-base whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum eveniet quasi impedit saepe deleniti praesentium.</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          className="relative h-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img4.jpeg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full px-[60px] lg:px-[100px] text-center lg:text-left lg:items-start items-center">

            <h2 className="text-3xl font-bold mb-2">Heading 4</h2>
            <p className="text-base whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum eveniet quasi impedit saepe deleniti praesentium.</p>
          </div>
        </div>

        <div
          className="relative h-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img5.jpeg')" }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full px-[60px] lg:px-[100px] text-center lg:text-left lg:items-start items-center">

            <h2 className="text-3xl font-bold mb-2">Heading 5</h2>
            <p className="text-base whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum eveniet quasi impedit saepe deleniti praesentium.</p>
          </div>
        </div>
        

      </Carousel>
    </div>
  );
};

export default Slider;
