import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  heroImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function heroImage({ title, heroImage, slug }: Props) {
  const image = (
    <Image
      fill
      alt={title}
      src={heroImage?.node.sourceUrl}
      className="object-cover object-center"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[30vh] sm:min-w-[30vw] sm:min-h-[40vh]">
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
