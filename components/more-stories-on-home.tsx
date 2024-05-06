import PostPreview from "./more-stories-preview";
import Link from "next/link";
export default function MoreStories({ posts }) {
  const limitedPosts = posts.slice(0, 9);

  return (
    <section>
      <div className="sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 sm:my-5">
        {limitedPosts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            slug={node.slug}
            excerpt={node.excerpt}
            category={node.categories.nodes.map(
              (category) => category.name
            )}
          />
        ))}
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:space-x-5 sm:gap-y-5 sm:items-end sm:w-full sm:gap-x-8">
        <Link
          href="/news"
          className="text-lg font-bold font-sans text-primary-500 sm:col-span-1"
        >
          {" "}
          <div className="bg-orange-800 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500">
            {" "}
            Read More
          </div>
        </Link>
      </div>
    </section>
  );
}
