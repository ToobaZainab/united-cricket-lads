import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const OurSponser = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">Our Sponsor</h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Section - 1 Part */}
        <div className="flex-1 flex flex-col gap-6">
          {/* <img src={sponsorLogo} alt="Sponsor Logo" className="w-48" /> */}
          <img src="./sponsor.webp" alt=""  style={{
            width : '300px'
          }}/>

          <div className="flex gap-4">
            <div className="bg-black text-white p-3 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-black text-white p-3 rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-black text-white p-3 rounded-full">
              <FaTiktok />
            </div>
          </div>
        </div>

        {/* Right Section - 2 Parts */}
        <div className="flex-[2] space-y-4">
          <h3 className="text-xl font-bold">About Pizza di Rocco</h3>
          <p className="text-gray-800 leading-relaxed">
            An award winning traditional Italian Pizzeria across Dubai, Abu Dhabi, and the wider UAE.
            Our crispy, authentic, artisanal pizzas are all handmade to order using traditional techniques,
            and only the freshest and finest ingredients baked to perfection in our Neapolitan pizza,
            hand-crafted cupola style oven. Guilt-free healthy salads, vegan friendly pizza options,
            homemade hearty soups & delicious dolce. A truly Italian experience.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded flex items-center gap-2">
            Visit Site <HiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSponser;
