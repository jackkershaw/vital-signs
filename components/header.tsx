import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white p-10 ">
      <div className="flex flex-row justify-between space-x-10 text-3xl">
        <Link href="/">
          <div className="h-[20vh] w-[20vw] relative">
            <Image
              src="/images/banner-draft.png"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-end">
          <div className="flex flex-row space-x-10 h-20 items-center justify-end w-full">
            <Link href="/about" className="hover:bg-accent-1 p-5">
              ABOUT
            </Link>
            <Link href="/issues" className="hover:bg-accent-1 p-5">
              ISSUES
            </Link>
            <Link href="/contact" className="hover:bg-accent-1 p-5">
              CONTACT
            </Link>
            <div className="hover:bg-accent-1 p-5">
              <span className="icon-[uil--facebook]"></span>
              <span className="icon-[bi--twitter-x]"></span>
              <span className="icon-[mdi--instagram]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
