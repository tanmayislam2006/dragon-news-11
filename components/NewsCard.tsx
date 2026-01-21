export interface NewsResponse {
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
      className="block bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 h-full flex flex-col p-6 shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3 font-semibold w-fit">
        {data.category.toLocaleUpperCase()}
      </span>
      {/* source name */}
      <h3 className="font-bold text-lg mb-2 line-clamp-2">{data.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        {data.description}
      </p>
    </a>
  );
}
