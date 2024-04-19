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
      <div className=" bg-cyan-50">
        <div className="container mx-auto p-5">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
