import { useState } from "react";
import Layout from "../components/layout";
import { getAllPostsForHome, getCategories } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function News({ allPosts: { edges }, Categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Posts = edges;
  const filteredPosts = selectedCategory
    ? Posts.filter(({ node }) =>
        node.categories.nodes.some(
          (category) => category.name === selectedCategory
        )
      )
    : Posts;

  const router = useRouter();

  useEffect(() => {
    const { category } = router.query;
    if (category) {
      setSelectedCategory(category);
    }
  }, [router.query]);

  return (
    <div>
      <Layout>
        <div className="font-bold font-sans text-xl flex flex-col pb-10 space-y-4 sm:space-y-0 sm:flex-row justify-between flex-wrap">
          {Categories.filter(
            (category) => category.node.name !== "Uncategorized"
          ).map((category) => (
            <button
              key={category.node.name}
              className={`text-xl ${
                selectedCategory === category.node.name
                  ? "text-customRed-800"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category.node.name)}
            >
              <div className="hover:text-customRed-950 active:text-customRed-500">
                {category.node.name}
              </div>
            </button>
          ))}
        </div>
        <div className="sm:grid sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5">
          {filteredPosts.map(({ node }) => (
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
