import HeroImage from "./hero-image";
import Link from "next/link";

export default function HeroPost({
  title,
  heroImage,
  excerpt,
  slug,
  category,
}) {
  return (
    <section className="sm:py-5 mb-8 sm:mb-0 sm:mx-auto">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-5">
        {heroImage && (
          <HeroImage title={title} heroImage={heroImage} slug={slug} />
        )}
        <div className="flex flex-col space-y-4">
          <h1 className="uppercase text-orange-800">{category}</h1>
          <h1 className="text-2xl text-orange-700 hover:text-orange-950 capitalize">
            <Link
              href={`/posts/${slug}`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h1>
          <h2
            className="text-lg font-serif"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
