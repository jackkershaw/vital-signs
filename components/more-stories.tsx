import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  const limitedPosts = posts.slice(0, 4);

  return (
    <section>
      <div className="sm:flex sm:justify-between">
        {limitedPosts.map(({ node }) => (
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
