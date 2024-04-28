import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{"Vital Signs Magazine"}</title>
        <meta
          name="description"
          content={"A Health Workers’ Magazine For a New Society"}
        />
      </Head>
      <Meta />
      <Header />
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            y: 20,
            opacity: 0,
            scale: 0.99,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              when: "beforeChildren",
            },
          },
        }}
      >
        <div className="bg-neutral-50 text-orange-950">
          <div className="px-10 sm:mx-10 min-h-[60vh]">
            <main>{children}</main>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
