interface NewsResponse {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
export default function NewsCard({ data }: { data: NewsResponse }) {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow mb-4"
    >
      <span>{data.category.toLocaleUpperCase()}</span>
      {/* source name */}
      <h3 className="">{data.name}</h3>
      <p className="">{data.description}</p>
    </a>
  );
}
