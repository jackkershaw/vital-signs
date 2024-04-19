import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto container px-5 py-2 flex flex-row justify-between space-x-10 text-3xl bg-orange-50">
        <Image
          src="/images/banner-draft.png"
          alt="logo"
          width={300}
          height={200}
        ></Image>
        <div className="flex flex-row space-x-10 h-20 items-center justify-center mt-10">
          <Link href="/about" className="bg-accent-1 p-4">
            ABOUT
          </Link>
          <Link href="/issues" className="bg-accent-1 p-4">
            ISSUES
          </Link>
          <Link href="/contact" className="bg-accent-1 p-4">
            CONTACT
          </Link>
          <div className="bg-accent-1 p-4">
            <span className="icon-[uil--facebook]"></span>
            <span className="icon-[bi--twitter-x]"></span>
            <span className="icon-[mdi--instagram]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
