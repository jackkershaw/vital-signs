export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold font-sans text-left sm:text-3xl text-orange-700 sm:leading-tight capitalize"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
