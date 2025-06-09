
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0A1E32] px-4 py-12">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Row 1: Logo + Description */}
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img
            src="./ucl-logo.webp"
            alt="United Cricket Lads"
            className="w-[200px] h-auto object-contain sm:w-20 sm:h-20"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">United Cricket Lads</h2>
            <p className="text-base max-w-md">
              UCL is not just a cricket club, UCL is a society, a band of cricket loving brothers who are Amateur cricketers & yet rubbing shoulders with the top sides around.
            </p>
          </div>
        </div>

        {/* Row 2: Footer Columns aligned with description text */}
        <div className="ml-0 sm:ml-[88px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-base">
              <li>1on1 Coaching</li>
              <li>Company Review</li>
              <li>Accounts Review</li>
              <li>HR Consulting</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-base">
              <li>About</li>
              <li>Meet the Team</li>
              <li>Accounts Review</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Helpful Links</h3>
            <ul className="space-y-1 text-base">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Live Chat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-base">
              <li>Accessibility</li>
              <li>Returns Policy</li>
              <li>Refund Policy</li>
              <li>Hiring Statistics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Downloads</h3>
            <ul className="space-y-1 text-base">
              <li>Marketing Calendar</li>
              <li>SEO Infographics</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
