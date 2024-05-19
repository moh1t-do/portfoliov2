'use client'
import type { NextComponentType, NextPageContext } from "next";
import { useState, useEffect } from "react";

import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";

import type { linkProps } from "../../@types/prop.types";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <Link
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </Link>
  );
};

const Header: NextComponentType = () => {
  const [showNav, handleShow] = useState('translate-y-0')
  const [lastScrollY, setScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        handleShow('sm:-translate-y-40')
      } else {
        handleShow('sm:translate-y-0')
      }
    } else {
      handleShow('sm:translate-y-0')
    }
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between sticky top-0 sm:backdrop-blur-sm ${showNav} transition-transform duration-300`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-2">
        <TextLink text="Home" url="#" />
        <TextLink text="Experience" url="#experience" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Link href="https://github.com/moh1t-do" className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github-repo">
        <VscGithubAlt />
      </Link>
    </header>
  );
};

export default Header;
