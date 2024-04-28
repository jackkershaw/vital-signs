import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage }) {
  return (
    <div className="sm:flex sm:flex-row sm:justify-center">
      <div className="flex flex-col sm:items-end sm:flex-row sm:gap-x-10">
        <div className="">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
        <div className="mt-8 sm:max-w-[300px]">
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </div>
  );
}
