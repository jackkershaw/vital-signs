import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
  category,
}) {
  return (
    <div className="mb-8 sm:mb-0">
      <div className="flex flex-col space-y-4">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
          />
        )}
        <h1 className=" text-orange-800 uppercase text-sm">
          {category}
        </h1>
        <h1 className="text-2xl text-orange-700 hover:text-orange-950 capitalize">
          <Link
            href={`/posts/${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h1>
        <div
          className="font-serif text-lg"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  );
}
