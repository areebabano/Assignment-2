import Image from "next/image";
import React from "react";

const Home = () => {
  return (
  <div className="flex items-center justify-center h-screen pt-14 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-8 w-full px-8">
        <div className="flex flex-col gap-4 justify-center w-1/2">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="font-normal text-[32px]">
            Lorem Ipsum&apos;is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <button className="flex items-center justify-center bg-black font-serif text-3xl text-white hover:bg-gray-400 hover:border-4 border-black w-[237px] h-[66px] p-4 mt-6">
            Contact US
          </button>
        </div>
        <Image src="/car.jpg" alt="My Car" height={502} width={465} />
      </div>
    </div>
  );
};

export default Home;
