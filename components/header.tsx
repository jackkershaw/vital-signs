import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="mx-auto container px-5 flex flex-row justify-between my-5 space-x-10 text-3xl">
        <Image
          src="/images/banner-draft.png"
          alt="logo"
          width={300}
          height={200}
        ></Image>
        <div className="flex flex-row space-x-10 h-20 items-center justify-center my-10">
          <Link href="/About" className="bg-accent-1 p-4">
            ABOUT
          </Link>
          <Link href="/News" className="bg-accent-1 p-4">
            NEWS
          </Link>
          <Link href="/Issues" className="bg-accent-1 p-4">
            ISSUES
          </Link>
          <Link href="/Contact" className="bg-accent-1 p-4">
            CONTACT
          </Link>
          <div className="bg-accent-1 p-4">F, T, I links</div>
        </div>
      </div>
    </div>
  );
}
