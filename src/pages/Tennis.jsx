import React, { useState, useEffect } from 'react';

function Layout() {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = async () => {
    try {
      let response = await fetch("https://newsapi.org/v2/everything?q=Tennis&apiKey=3fc72927f6dd4a9ab03d007a5894f622");
      let result = await response.json();
      console.log("API response: ", result); // Log the response
      if (result && result.articles) {
        setValue(result.articles);
      } else {
        setValue([]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setValue([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    api();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="grid gap-2 lg:grid-cols-4">
      {value.length > 0 ? (
        value.map((a, index) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={index}>
            <img
              className="object-cover w-full h-48"
              src={a.urlToImage || "fallback-image-url"}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {a.title}
              </h4>
              <p className="mb-2 leading-normal">
                {a.content || "No content available."}
              </p>
              <a href={a.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
}

export default Layout;
