import HeroImage from "./hero-image";
import Link from "next/link";

export default function HeroPost({
  title,
  heroImage,
  excerpt,
  slug,
  category,
}) {
  const sentence = excerpt.split(/[.()]/)[0].trim().concat("."); // Get the first sentence

  return (
    <section className="sm:py-5 mb-8 sm:mb-0 sm:grid sm:grid-cols-3 sm:items-end sm:w-full sm:gap-x-8">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:items-end sm:flex-between mb-8 sm:mb-0 sm:col-span-2">
        {heroImage && (
          <HeroImage title={title} heroImage={heroImage} slug={slug} />
        )}
        <div className="flex flex-col space-y-4">
          <Link
            className="uppercase text-customRed-950 font-sans font-bold"
            href={`/news?category=${category}`}
          >
            {category}
          </Link>
          <h1 className="text-2xl sm:text-3xl text-customRed-700 hover:text-customRed-950 capitalize">
            <Link
              href={`/posts/${slug}`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h1>

          <h2
            className="text-lg font-serif"
            dangerouslySetInnerHTML={{ __html: sentence }}
          />
        </div>
      </div>
      <Link
        href="/issues"
        className="text-lg font-bold font-sans text-primary-500"
      >
        {" "}
        <div className="bg-customRed-800 mb-10 sm:mb-0 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500 right-0">
          {" "}
          Read The Latest Issue
        </div>
      </Link>
    </section>
  );
}
