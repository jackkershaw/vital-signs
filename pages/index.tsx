import { GetStaticProps } from "next";
import MoreStories from "../components/more-stories-on-home";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout>
      <div className="sm:grid sm:grid-cols-2 sm:gap-2">
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
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
    revalidate: 10,
  };
};
