import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getCategories, getPostsWithCategory } from "../../lib/api";
import { useEffect } from "react";

export default function CategoryPage({ category, posts }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!category) {
    useEffect(() => {
      router.push("/404"); // Redirect to 404 page if category not found
    }, []);
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{`${category} | Vital Signs Magazine`}</title>
      </Head>
      <h1>{category}</h1>
      Here is some info
      {/* Add posts under the category */}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPostsWithCategory(params.category);
  return {
    props: {
      category: params.category,
      posts: posts || [], // Ensure posts is an array even if empty
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  return {
    paths:
      categories.map(
        ({ node }) => `/categories/${encodeURIComponent(node.name)}`
      ) || [],
    fallback: true,
  };
};
