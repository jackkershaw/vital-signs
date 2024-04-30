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
      <div className="sm:flex sm:flex-col sm:-mt-10">
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
        <Link
          href="/issues"
          className="text-lg font-bold font-sans text-primary-500"
        >
          {" "}
          <div className="bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500">
            {" "}
            Read The Latest Issue
          </div>
        </Link>
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
