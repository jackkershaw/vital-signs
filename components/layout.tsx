import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <div>
      <Header />
      <Meta />
      <div className="min-h-screen container mx-auto px-5">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
