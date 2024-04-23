import Layout from "../components/layout";
import Image from "next/image";
import { getAboutPageContent } from "../lib/api";

export default function About({ content }) {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-10 min-h-[70vh] pb-10">
          <div className="relative max-w-[50vw] ">
            <Image
              src="/images/about.jpg"
              alt=""
              className=" object-cover"
              fill
            ></Image>
          </div>
          <div>
            <h1 className="font-sans text-4xl pb-5">About</h1>
            <div className="font-serif text-xl prose">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const content = await getAboutPageContent();
  return {
    props: {
      content,
    },
  };
}
