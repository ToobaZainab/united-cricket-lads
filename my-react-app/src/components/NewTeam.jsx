import React from 'react'

const NewTeam = () => {
  return (
    // <div className="bg-[#F5F5F5]  rounded-1xl shadow-md p-6 max-w-[280px]  text-center">
    <div className="bg-[#F5F5F5] rounded-2xl shadow-md p-4 sm:p-6 w-full max-w-xs mx-auto text-center">

    {/* Rank and Team Name */}
    <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="bg-yellow-300 text-black font-bold w-8 h-8 flex items-center justify-center rounded-full">
        5
      </div>
      <h2 className="text-lg font-bold">New Zealand</h2>
    </div>

    {/* Flag Image */}
    <img
      src="/new.webp" // Replace with your image path
      alt="England Flag"
      className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
    />
<hr className=" border-gray-200" />
    {/* Stats */}
    <div className="grid grid-cols-4 gap-2 text-sm font-semibold mb-4 mt-4">
      <div>
        <p className="text-black">30</p>
        <p style={{ color: '#1c1c1c' }}>Played</p>
      </div>
      <div>
        <p className="text-black">25</p>
        <p style={{ color: '#1c1c1c' }}>Points</p>
      </div>
      <div>
        <p className="text-black">5</p>
        <p style={{ color: '#1c1c1c' }}>Won</p>
      </div>
      <div>
        <p className="text-black">2.99</p>
        <p style={{ color: '#1c1c1c' }}>NRR</p>
      </div>
    </div>
   

    {/* Recent Form */}
    <div className="text-left">
      <p className="text-sm font-semibold mb-2 mt-2" style={{ color: '#1c1c1c' }}>Recent Form</p>
      <div className="flex gap-2 ">
        {['W', 'L', 'W', 'W'].map((item, index) => (
          <span
            key={index}
            className="border-2 border-yellow-300 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
  )
}

export default NewTeam
