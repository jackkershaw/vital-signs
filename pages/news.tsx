import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import PostPreview from "../components/post-preview";
import { GetStaticProps } from "next";

export default function About({ allPosts: { edges } }) {
  const Posts = edges;

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 py-10">
          This is the news categories page. All categories listed and
          selectable at top
        </div>
        <div className="sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5">
          {Posts.map(({ node }) => (
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
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPosts = await getAllPostsForHome({ preview: false });
  return {
    props: { allPosts },
    revalidate: 10,
  };
};
