import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="sm:flex sm:flex-row sm:justify-between sm:gap-x-10">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            slug={node.slug}
            excerpt={node.excerpt}
            category={node.categories.edges.map(
              (category) => category.node.name
            )}
          />
        ))}
      </div>
    </section>
  );
}
