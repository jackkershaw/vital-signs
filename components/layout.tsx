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
      <div className="container mx-auto px-5">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
