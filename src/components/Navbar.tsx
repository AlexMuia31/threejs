import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src="/assets/images/apple.svg" height={20} width={20} alt="" />
        <div>
          {["Phones", "MacBooks", "Tablets"].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
