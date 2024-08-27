import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({ title, blurb, url }) => (
  <div className="mb-4">
    <Link to={url} className="text-blue-800 hover:underline">
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
    <p className="text-sm">{blurb}</p>
  </div>
);

const Index = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "SHOCKING REVELATION!", blurb: "You won't believe what we found...", url: "/article/1" },
    { id: 2, title: "CONSPIRACY UNCOVERED", blurb: "The truth they don't want you to know...", url: "/article/2" },
    { id: 3, title: "EXCLUSIVE REPORT", blurb: "Breaking news that will change everything...", url: "/article/3" },
  ]);

  const addArticle = () => {
    const newArticle = {
      id: articles.length + 1,
      title: "NEW BOMBSHELL REPORT",
      blurb: "Fresh off the press: A story that will shake the foundations...",
      url: `/article/${articles.length + 1}`,
    };
    setArticles([...articles, newArticle]);
  };

  useEffect(() => {
    // Simulating automatic updates (every 10 seconds for demo purposes)
    const interval = setInterval(addArticle, 10000);
    return () => clearInterval(interval);
  }, [articles]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center font-serif text-red-800">HOAX.COM</h1>
        <div className="bg-white p-6 shadow-lg">
          {articles.map((article) => (
            <ArticleLink key={article.id} {...article} />
          ))}
        </div>
        <button
          onClick={addArticle}
          className="mt-4 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Add New Article (Demo)
        </button>
      </div>
    </div>
  );
};

export default Index;
