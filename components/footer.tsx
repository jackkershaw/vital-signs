import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="bg-customRed-50 w-full">
      <div className="p-5 sm:p-10 sm:mx-10 font-serif justify-between space-y-10 sm:space-y-0 flex flex-col sm:flex-row">
        <SocialIcons />
        <div>
          <p>A Health Workers’ Magazine For a New Society</p>
        </div>
        <div className="sm:text-right">
          <p className="py-2 sm:py-0">
            Site by{" "}
            <a
              href="https://www.jackkershaw.net"
              target="_blank"
              className="font-bold
              text-customRed-800
              hover:text-customRed-950
              active:text-customRed-500"
            >
              Jack Kershaw.
            </a>
          </p>
          <p className="py-2 sm:py-0">
            Source on{" "}
            <a
              href="https://github.com/jones58/vital-signs"
              target="_blank"
              className="font-bold text-customRed-800 hover:text-customRed-950 active:text-customRed-500"
            >
              Github.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
