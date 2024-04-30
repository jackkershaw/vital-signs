import { GetStaticProps } from "next";
import MoreStories from "../components/more-stories-on-home";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Link from "next/link";

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout>
      <div className="sm:-mt-10">
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            heroImage={heroPost.featuredImage}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            category={heroPost.categories.nodes.map(
              (category) => category.name
            )}
          />
        )}
      </div>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPosts = await getAllPostsForHome({ preview: false });
  return {
    props: { allPosts },
    revalidate: 10,
  };
};
