import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-col md:flex-row gap-6 items-center justify-between px-3 font-se">
      <div className="w-full">
        <p className="text-3xl font-bold text-white">Mohit Doraiburu</p>
        <p className="mt-1 text-lg text-gray-300">
          Full stack Developer, Artist and a Student
        </p>

        <p className="mt-4 text-gray-400">
          Building Web apps. Posting fanarts <br /> on
          my instagram page sometimes.
        </p>

        <Link href="https://www.instagram.com/_odd.numbers_/" className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
          target="_blank"
          rel="noopener noreferrer">
          Checkout my page
          <HiOutlineArrowNarrowRight />
        </Link>

      </div>

      <div className="custom:block">
        <Image
          src="/assests/avatar.png"
          width="212"
          height="212"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
