import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{"Vital Signs Magazine"}</title>
      </Head>
      <Meta />
      <Header />
      <div className="bg-neutral-50 text-orange-950">
        <div className="px-10 sm:mx-10">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
