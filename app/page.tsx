"use client";

import NewsCard from "@/components/NewsCard";
import SelectCountry from "@/components/SelectCountry";
import { useEffect, useState } from "react";
const API_KEY = "0078f024448e44a88e05e6408bfdd08c";
export default function Home() {
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
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
  console.log(news);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center py-20">
        Welcome to Dragon News
      </h1>
      <SelectCountry value={country} onChange={setCountry}></SelectCountry>
      <div className="grid grid-cols-4 gap-4 mt-4 ">
        {news.map((n) => {
          return <NewsCard key={n.id as string} data={n}></NewsCard>;
        })}
      </div>
    </div>
  );
}
