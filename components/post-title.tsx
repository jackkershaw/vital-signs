export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold font-sans md:leading-none mb-12 text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
