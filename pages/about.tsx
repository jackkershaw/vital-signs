import Layout from "../components/layout";
import Image from "next/image";
import { getAboutPageContent } from "../lib/api";
import { GetStaticProps } from "next";

export default function About({ content, featuredImage }) {
  const strippedContent = content.replace(/<[^>]+>/g, " ");

  return (
    <div>
      <Layout>
        <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:min-h-[70vh] pb-10">
          <div className="relative min-w-[200px] min-h-[200px] sm:max-w-[50vw]">
            <Image
              src={featuredImage}
              alt="Cover Image For About Vital Signs"
              className="object-cover object-center pb-8 sm:pb-0"
              fill
            />
          </div>
          <div>
            <h1 className="font-sans text-2xl sm:text-4xl pb-5">
              About Vital Signs
            </h1>
            <div className="font-serif text-lg prose">
              {strippedContent}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, featuredImage } = await getAboutPageContent();
  return {
    props: {
      content,
      featuredImage,
    },
    revalidate: 10,
  };
};
