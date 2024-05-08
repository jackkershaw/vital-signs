import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";

export default function PostHeader({ title, coverImage, category }) {
  return (
    <div>
      <div className="pb-5 sm:pb-0">
        <Link
          className="text-customRed-950 uppercase font-bold font-sans"
          href={`/news?category=${category[0].node.name}`}
        >
          {category[0].node.name}
        </Link>
      </div>
      <div className="sm:flex sm:flex-row sm:justify-center sm:pb-8">
        <div className="flex flex-col sm:items-end sm:flex-row sm:gap-x-10">
          <div className="">
            <CoverImage title={title} coverImage={coverImage} />
          </div>
          <div className="mt-8 sm:max-w-[300px]">
            <PostTitle>{title}</PostTitle>
          </div>
        </div>
      </div>
    </div>
  );
}
