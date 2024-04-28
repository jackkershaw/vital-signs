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
    <div className="flex-row flex justify-center items-center">
      <div className="relative min-w-[80vw] min-h-[30vh] sm:min-w-[20vw] sm:h-auto">
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
