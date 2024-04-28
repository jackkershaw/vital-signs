export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold font-sans text-left sm:text-5xl text-orange-700 sm:leading-tight"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
