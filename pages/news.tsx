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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Layout>
        <div className="font-bold font-sans text-2xl p-10 bg-customRed-800 text-neutral-50 mb-5 sm:mb-10">
          <select
            value={selectedCategory || ""}
            onChange={handleCategoryChange}
            className="bg-transparent"
          >
            <option value="">Choose a category</option>
            {Categories.filter(
              (category) => category.node.name !== "Uncategorized"
            ).map((category) => (
              <option
                key={category.node.name}
                value={category.node.name}
              >
                {category.node.name}
              </option>
            ))}
          </select>
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
