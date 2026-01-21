"use client";

import NewsCard, { NewsResponse } from "@/components/NewsCard";
import SelectCountry from "@/components/SelectCountry";
import { useEffect, useState } from "react";
const API_KEY = "0078f024448e44a88e05e6408bfdd08c";
export default function Home() {
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsResponse[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          ` https://newsapi.org/v2/top-headlines/sources?country=${country}&apiKey=${API_KEY}`,
        );
        const data = await res.json();

        setNews(data.sources);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Failed to load News");
      }
    };
    dataFetch();
  }, [country]);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center py-20">
        Welcome to Dragon News
      </h1>
      <SelectCountry value={country} onChange={setCountry}></SelectCountry>
      {loading ? (
        <div className="text-center p-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {news?.map((n) => {
            return <NewsCard key={n.id} data={n}></NewsCard>;
          })}
        </div>
      )}
    </div>
  );
}
