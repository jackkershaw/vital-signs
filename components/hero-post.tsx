import HeroImage from "./hero-image";
import Link from "next/link";

export default function HeroPost({ title, heroImage, excerpt, slug }) {
  return (
    <section className="px-5 h-screen">
      <div className="mb-3">
        {heroImage && (
          <HeroImage title={title} heroImage={heroImage} slug={slug} />
        )}
      </div>
      <div className="">
        <div>
          <h3 className="mb-3 text-2xl lg:text-3xl">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>

        <Link
          href={`/posts/${slug}`}
          className="text-lg font-bold text-primary-500 hover:underline"
        >
          {" "}
          <div className="bg-orange-500 p-5 w-full">
            {" "}
            Read the Latest Issue
          </div>
        </Link>
      </div>
    </section>
  );
}
