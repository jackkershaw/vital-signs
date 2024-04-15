import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
