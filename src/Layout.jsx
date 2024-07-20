import React, { useState, useEffect } from 'react';

function Layout() {
  const [value, setValue] = useState([]);
  
  const api = async () => {
    try {
      let response = await fetch("https://newsapi.org/v2/everything?q=sports&apiKey=3fc72927f6dd4a9ab03d007a5894f622");
      let result = await response.json();

      setValue(result.articles);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    api();
  }, []);
  
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {value.map((a, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
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
                {a.content}
              </p>
              <a href={a.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Layout;
