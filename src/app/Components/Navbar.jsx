import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center pl-16 pr-16 p-10 bg-[#62B6B7]">
        <h2>Syed Syab</h2>
        <ul className="flex flex-row items-center justify-between list-none  gap-4">
          <li>
            <Link href={"https://www.linkedin.com/in/SyedSyab"}>
              <img
                className="w-9 border rounded-xl opacity-1 hover:opacity-[.5] transition .2s eas-out"
                src="https://th.bing.com/th/id/OIP.X3L6rbUViAiyWEvuSsCVAQHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7"
                alt="LinkedIn"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.github.com/in/SyabAhmad"}>
              <img
                className="w-9 border rounded-xl opacity-1 hover:opacity-[.5] transition .2s eas-out"
                src="https://th.bing.com/th/id/OIP.dAtpfnBo1u4nvO6PscwomQHaHa?w=192&h=193&c=7&r=0&o=5&pid=1.7"
                alt="GitHub   "
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
