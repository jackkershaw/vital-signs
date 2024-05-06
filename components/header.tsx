import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "./social-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-customRed-50 sm:px-10 pb-5 mb-10 sm:mb-0">
      <div className="sm:grid sm:grid-cols-2 sm:mx-10">
        <div className="flex flex-row items-end justify-between px-5 sm:px-0 sm:justify-start sm:space-y-10 bg-customRed-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-5xl text-customRed-700 pr-5"
            aria-label="menu"
          >
            {menuOpen ? (
              <span className="icon-[mdi--arrow-up] text-customRed-700"></span>
            ) : (
              <span className="icon-[mdi--hamburger-menu] text-customRed-700"></span>
            )}
          </button>
          <Link href="/" className="max-h-[220px] ">
            <div className="min-w-[250px] min-h-[250px] sm:min-w-[20vw] sm:min-h-[20vh] relative">
              <Image
                src="/images/banner-draft.png"
                alt="logo"
                fill
                className="object-contain object-center"
              />
            </div>
          </Link>
        </div>
        {/* mobile menu */}
        <div className="flex flex-row sm:flex-col sm:justify-end sm:hidden">
          {menuOpen && (
            <motion.div
              className="absolute sm:static space-y-8 justify-start w-full flex flex-col z-50 bg-customRed-50 pl-5 sm:pl-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans">
                <Link
                  href="/about"
                  className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                >
                  ABOUT
                </Link>
                <Link
                  href="/news"
                  className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                >
                  NEWS
                </Link>
                <Link
                  href="/issues"
                  className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                >
                  ISSUES
                </Link>
              </div>
              <SocialIcons />
            </motion.div>
          )}
        </div>
        {/* desktop menu */}
        <div className="hidden sm:flex flex-row sm:flex-col sm:justify-end">
          <div className="space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row z-50 bg-customRed-50">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0">
              <Link
                href="/about"
                className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                aria-label="link to the about page"
              >
                ABOUT
              </Link>
              <Link
                href="/news"
                className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                aria-label="link to the news page"
              >
                NEWS
              </Link>
              <Link
                href="/issues"
                className="text-customRed-700 hover:text-customRed-950 active:text-customRed-500"
                aria-label="link to the issues page"
              >
                ISSUES
              </Link>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
}
