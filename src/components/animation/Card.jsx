import React from 'react';

const Card = ({children}) => {
  return (
    <div className="bg-[#181818] md:w-[92vw] md:h-[60vh] flex  justify-center items-center rounded-3xl border border-gray-200 border-opacity-25 shadow-lg">

      <div className="bg-[#101010] m-2 rounded-2xl md:w-[92vw] md:h-[58vh] border border-gray-200 border-opacity-25 flex flex-col items-center text-white">
        {children}
      </div>
     
    </div>
  );
};

export default Card;