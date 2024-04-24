import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  postCoverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function PostCoverImage({
  title,
  postCoverImage,
  slug,
}: Props) {
  const image = (
    <Image
      fill
      alt={title}
      src={postCoverImage?.node.sourceUrl}
      className="object-cover object-centre"
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <div className="relative min-w-[50vw] min-h-[20vh] sm:w-[22vw] sm:h-[25vh]">
            {image}
          </div>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
