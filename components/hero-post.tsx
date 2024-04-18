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
          <h3 className="mb-3 text-2xl lg:text-3xl text-orange-700 hover:text-orange-950">
            <Link
              href={`/posts/${slug}`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
        </div>
        <div>
          <div
            className="text-lg  mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <Link
          href={`/posts/${slug}`}
          className="text-lg font-bold text-primary-500 "
        >
          {" "}
          <div className="bg-orange-700 p-5 w-full">
            {" "}
            Read the Latest Issue
          </div>
        </Link>
      </div>
    </section>
  );
}
