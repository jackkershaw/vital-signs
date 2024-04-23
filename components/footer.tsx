export default function Footer() {
  return (
    <footer className="bg-orange-50 w-full">
      <div className="p-10  font-serif justify-between flex flex-row">
        <div>
          <p>Vital signs is a project. </p>
        </div>
        <div className="text-right">
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
