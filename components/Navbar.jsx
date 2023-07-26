import Image from "next/image";
import logo from "../public/Logo.png";
import downloadIcon from "@/public/download.svg";
import { FaBars, FaTimes } from "react-icons/fa";

import  Link from "next/link";

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className="flex justify-between items-center px-[40px] lg:pl-[12.69rem] lg:pr-[8rem] pt-[1.31rem]">
      <Image src={logo} alt="logo" />
      <div
        className={`${
          open ? "" : "hidden lg:flex"
        } fixed top-0 left-0 bottom-0 h-screen lg:h-auto w-screen lg:w-auto z-[999] lg:static bg-[#155FA4] lg:bg-transparent flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[3.03rem]`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-[2.43rem]">
          <Link
            href='/'
          >
            <li>HOME</li>
          </Link>
          <Link
            href='/About'
          >
            <li>ABOUT</li>
          </Link>
          <Link
             href='/Models'
          >
            <li>MODELS</li>
          </Link>
          <Link
            href='/Certification'
          >
            <li>CERTIFICATION</li>
          </Link>
          <Link
            href='/Gallery'
          >
            <li>GALLERY</li>
          </Link>
          <Link
             href='/Contact'
          >
            <li>CONTACT</li>
          </Link>
        </ul>
        <button className="w-[104px] h-[29px] rounded-[3px] border border-white flex justify-center items-center gap-[0.30rem] text-white text-xs font-normal leading-[10px]">
          <Image src={downloadIcon} alt="download Icon" /> BROCHURE
        </button>
        <FaTimes
          onClick={() => setOpen(false)}
          className="absolute top-[20px] right-[30px] text-[40px] text-[red] lg:hidden"
        />
      </div>
      <FaBars
        onClick={() => setOpen(true)}
        className="block lg:hidden text-[30px]  text-black"
      />
    </nav>
  );
};

export default Navbar;
