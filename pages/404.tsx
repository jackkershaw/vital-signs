import Layout from "../components/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h1
          className="text-4xl text-center mb-10 sm:text-left sm:text-8xl sm:mb-20
    "
        >
          Page not found
        </h1>
        <Link
          href="/"
          className="text-xl text-center mb-10 sm:text-left"
        >
          <p className="text-orange-700 hover:text-orange-950 active:text-orange-500 sm:text-4xl font-sans">
            Click here to return to the home page
          </p>
        </Link>
      </div>
    </Layout>
  );
}
