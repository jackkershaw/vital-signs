export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold md:leading-none mb-12 text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
