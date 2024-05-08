export default function SocialIcons() {
  return (
    <div className="flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-4 sm:pb-0 text-3xl">
      <span className="icon-[mdi--facebook] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"></span>
      <span className="icon-[mdi--twitter] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"></span>
      <a
        href="https://vitalsignscontenteditor.co.uk/rss"
        target="_blank"
        className="flex-col flex justify-end items-end"
        aria-label="link to the Vital Signs Magazine RSS feed"
      >
        <span className="icon-[mdi--rss] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"></span>
      </a>
      <a
        aria-label="link to the Vital Signs email"
        href="mailto:vitalsignsmag@proton.me"
        target="_blank"
        className="flex-col flex justify-end items-end"
      >
        <span className="icon-[mdi--email] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0">
          {" "}
        </span>
      </a>
    </div>
  );
}
