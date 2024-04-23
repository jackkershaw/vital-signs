import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
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
      alt={title}
      src={coverImage?.node.sourceUrl}
      className="object-cover object-center"
    />
  );
  return (
    <div className="mx-0 relative w-[90vw] h-[40vh] sm:w-[22vw] sm:h-[25vh]">
      <div className="flex-row flex justify-end items-center">
        {slug ? (
          <Link href={`/posts/${slug}`} aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    </div>
  );
}
