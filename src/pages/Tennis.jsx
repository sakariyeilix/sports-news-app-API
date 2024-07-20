// src/pages/Football.jsx
import React, { useState, useEffect } from 'react';

function Football() {
  const [articles, setArticles] = useState([]);

  const fetchFootballNews = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/everything?q=Tennis%20news&apiKey=cd2de0bcc94949c2acd769e64f1a0450");
      const result = await response.json();
      setArticles(result.articles);
    } catch (error) {
      console.error("Error fetching football news: ", error);
    }
  };

  useEffect(() => {
    fetchFootballNews();
  }, []);

  return (
    <div className="grid gap-2 lg:grid-cols-4">
      {articles.map((article, index) => (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={index}>
          <img
            className="object-cover w-full h-48"
            src={article.urlToImage || "fallback-image-url"}
            alt="Football"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-blue-600">
              {article.title}
            </h4>
            <p className="mb-2 leading-normal">
              {article.content}
            </p>
            <a href={article.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Football;
