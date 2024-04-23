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
    <section className="p-5 ">
      <Link
        href={`/posts/${slug}`}
        className="text-lg font-bold text-primary-500"
      >
        {" "}
        <div className="bg-orange-700 mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500">
          {" "}
          Read the Latest Issue
        </div>
      </Link>
      <div className="mb-3">
        {heroImage && (
          <HeroImage title={title} heroImage={heroImage} slug={slug} />
        )}
      </div>
      <div>
        <div>
          <h1 className="text-right">{category}</h1>
          <h3 className="mb-3 text-2xl lg:text-3xl text-orange-700 hover:text-orange-950 active:text-orange-500">
            <Link
              href={`/posts/${slug}`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
        </div>
        <div>
          <div
            className="text-lg font-serif mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
