import PostPreview from "./post-preview";
import Link from "next/link";
export default function MoreStories({ posts }) {
  const limitedPosts = posts.slice(0, 4);

  return (
    <section>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
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
      <Link
        href="/news"
        className="text-lg font-bold font-sans text-primary-500"
      >
        {" "}
        <div className="bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500">
          {" "}
          Read more
        </div>
      </Link>
    </section>
  );
}
