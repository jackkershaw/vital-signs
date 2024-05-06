import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug?: string;
}

export default function CoverImage({
  title,
  coverImage,
  slug,
}: Props) {
  const image = (
    <Image
      fill
      alt={coverImage?.node.altText}
      src={coverImage?.node.sourceUrl}
      className="object-cover object-center"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[30vh] sm:min-w-[21vw] sm:min-h-[25vh]">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
