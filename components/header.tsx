import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-orange-50 px-10 py-5 mb-10">
      <div className="flex flex-row justify-between space-x-10 text-3xl bg-orange-50">
        <Link href="/">
          <div className="min-w-[20vw] min-h-[20vh] relative">
            <Image
              src="/images/banner-draft.png"
              alt="logo"
              fill
              className="object-contain object-center"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row space-x-10 h-20 items-center justify-end w-full">
            <div className="flex items-center space-x-8">
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
            <div className="flex flex-row items-center justify-between space-x-6">
              <span className="icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500"></span>
              <span className="icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500"></span>
              <span className="icon-[mdi--instagram] text-orange-700 hover:text-orange-950 active:text-orange-500"></span>
              <a
                href="mailto:vitalsignsmag@proton.me"
                className="flex-col flex justify-end items-end"
              >
                <span className="icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500">
                  {" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
