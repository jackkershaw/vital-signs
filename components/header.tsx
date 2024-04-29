import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-orange-50 sm:px-10 pb-5 mb-10">
      <div className="sm:grid sm:grid-cols-2 sm:mx-10">
        <div className="flex flex-row items-center justify-between px-10 sm:px-0 sm:justify-start sm:space-y-10 bg-orange-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-4xl text-orange-700"
            aria-label="menu"
          >
            {menuOpen ? (
              <span className="icon-[mdi--arrow-up] text-orange-700"></span>
            ) : (
              <span className="icon-[mdi--hamburger-menu] text-orange-700"></span>
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
              className={`absolute sm:static space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row z-50 bg-orange-50 sm:hidden`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0">
                <Link
                  href="/about"
                  className="text-orange-700 hover:text-orange-950 active:text-orange-500"
                >
                  ABOUT
                </Link>
                <Link
                  href="/news"
                  className="text-orange-700 hover:text-orange-950 active:text-orange-500"
                >
                  NEWS
                </Link>
                <Link
                  href="/issues"
                  className="text-orange-700 hover:text-orange-950 active:text-orange-500"
                >
                  ISSUES
                </Link>
              </div>
              <div className="flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-10 sm:pb-0 text-3xl">
                <span className="icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
                <span className="icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
                <a
                  href="https://vitalsignscontenteditor.co.uk/rss"
                  target="_blank"
                  className="flex-col flex justify-end items-end"
                >
                  <span className="icon-[mdi--rss] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
                </a>
                <a
                  href="mailto:vitalsignsmag@proton.me"
                  target="_blank"
                  className="flex-col flex justify-end items-end"
                >
                  <span className="icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0">
                    {" "}
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
        {/* desktop menu */}
        <div className="hidden sm:flex flex-row sm:flex-col sm:justify-end">
          <div className="space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row z-50 bg-orange-50">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0">
              <Link
                href="/about"
                className="text-orange-700 hover:text-orange-950 active:text-orange-500"
              >
                ABOUT
              </Link>
              <Link
                href="/news"
                className="text-orange-700 hover:text-orange-950 active:text-orange-500"
              >
                NEWS
              </Link>
              <Link
                href="/issues"
                className="text-orange-700 hover:text-orange-950 active:text-orange-500"
              >
                ISSUES
              </Link>
            </div>
            <div className="flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-10 sm:pb-0 text-3xl">
              <span className="icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
              <span className="icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
              <a
                href="https://vitalsignscontenteditor.co.uk/rss"
                target="_blank"
                className="flex-col flex justify-end items-end"
              >
                <span className="icon-[mdi--rss] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0"></span>
              </a>
              <a
                href="mailto:vitalsignsmag@proton.me"
                target="_blank"
                className="flex-col flex justify-end items-end"
              >
                <span className="icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500 p-5 sm:p-0">
                  {" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
