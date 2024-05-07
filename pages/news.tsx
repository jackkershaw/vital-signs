import Layout from "../components/layout";
import { getAllPostsForHome, getCategories } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";

export default function News({ allPosts: { edges }, Categories }) {
  const Posts = edges;

  return (
    <div>
      <Layout>
        <div className="font-bold font-sans text-xl flex flex-col pb-10 space-y-4 sm:space-y-0 sm:flex-row justify-between flex-wrap">
          {Categories.map((category) => (
            <a
              href={`/categories/${category.node.name}`}
              key={category.node.name}
              className="text-xl"
            >
              <div className="text-customRed-800 hover:text-customRed-950 active:text-customRed-500">
                {category.node.name}
              </div>
            </a>
          ))}
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
  const Categories = await getCategories();
  return {
    props: { allPosts, Categories },
    revalidate: 10,
  };
};
