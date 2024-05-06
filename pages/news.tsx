import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";

export default function About({ allPosts: { edges } }) {
  const Posts = edges;

  return (
    <div>
      <Layout>
        <div className="py-10 font-bold font-sans text-4xl">
          WIP. There will be a list of all the categories at the top.
          Click on category to get just articles for that category.
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
