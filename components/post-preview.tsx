import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div className="mb-4">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
          />
        )}
      </div>
      <h3 className="text-2xl mb-4 text-orange-700 hover:text-orange-950">
        <Link
          href={`/posts/${slug}`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>

      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  );
}
