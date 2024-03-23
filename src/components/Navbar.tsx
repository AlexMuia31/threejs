import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <Image src="/assets/images/apple.svg" height={20} width={20} alt="" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["Phones", "MacBooks", "Tablets"].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div>
          <Image
            src="/assets/images/search.svg"
            height={20}
            width={20}
            alt=""
          />
          <Image src="/assets/images/bag.svg" height={20} width={20} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
