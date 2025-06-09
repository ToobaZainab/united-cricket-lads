import React from 'react'

const BottomFooter = () => {
  return (
    <div className="bg-[#f9f9f9] px-4 py-4">
    <div className="max-w-[1200px] mx-auto xl:mx-20 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-[#0A1E32]">
      <p className="text-center md:text-left">
        © 2024 United Cricket Club. All rights reserved. Powered by TechWrath.
        
      </p>
  
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookies</a>
      </div>
    </div>
  </div>
  
  
  )
}

export default BottomFooter
