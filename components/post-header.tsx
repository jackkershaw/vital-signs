import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage }) {
  return (
    <div className="">
      <div className="flex flex-col sm:align-middle sm:items-center m-10">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
    </div>
  );
}
