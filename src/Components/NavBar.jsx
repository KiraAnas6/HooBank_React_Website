import { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="relative z-[100] py-4 w-full flex justify-between items-center">
      <a href="#">
        <img src={logo} className="w-[132px] h-[32px]" alt="icon" />
      </a>
      <ul className="list-none sm:flex hidden">
        {navLinks.map((link) => {
          return (
            <li className="mr-10 text-[16px]" key={link.title}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div
        className="sm:hidden block cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <img src={toggle ? close : menu} alt="toggle-menu" />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-20 right-0 w-full sidebar p-6 rounded-md 
          bg-black-gradient`}
        >
          <ul className="list-none flex flex-col">
            {navLinks.map((link) => {
              return (
                <li className="mb-4 text-[16px]" key={link.title}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
