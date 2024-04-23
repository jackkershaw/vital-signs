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
      width={2000}
      height={1000}
      alt={title}
      src={heroImage?.node.sourceUrl}
      className="object-cover object-center w-50 h-70"
    />
  );
  return (
    <div className="sm:mx-0">
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
