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
      className="object-cover object-center w-50 h-70"
    />
  );
  return (
    <div className="sm:mx-0 relative sm:min-w-[40vw] sm:min-h-[80vh]">
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
