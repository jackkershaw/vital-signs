export default function Footer() {
  return (
    <footer className="bg-orange-50 w-full">
      <div className="p-10 sm:mx-10 font-serif justify-between space-y-10 sm:space-y-0 flex flex-col sm:flex-row">
        <div>
          <p>A Health Workers’ Magazine For a New Society</p>
        </div>
        <div className="sm:text-right">
          <p>
            Site by{" "}
            <a
              href="https://www.jackkershaw.net"
              target="_blank"
              className="font-bold
              text-orange-700
              hover:text-orange-950
              active:text-orange-500"
            >
              Jack Kershaw.
            </a>
          </p>
          <p>
            Source on{" "}
            <a
              href="https://github.com/jones58/vital-signs"
              target="_blank"
              className="font-bold text-orange-700 hover:text-orange-950 active:text-orange-500"
            >
              Github.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
