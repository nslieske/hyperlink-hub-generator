import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({ title, blurb, url, date }) => (
  <div className="mb-4">
    <Link to={url} className="text-blue-800 hover:underline">
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
    <p className="text-sm">{blurb}</p>
    <p className="text-xs text-gray-500 mt-1">{date}</p>
  </div>
);

const Index = () => {
  const [articles] = useState([
    { id: 1, title: "SHOCKING REVELATION!", blurb: "You won't believe what we found...", url: "/article/1", date: "2024-03-15" },
    { id: 2, title: "CONSPIRACY UNCOVERED", blurb: "The truth they don't want you to know...", url: "/article/2", date: "2024-03-14" },
    { id: 3, title: "EXCLUSIVE REPORT", blurb: "Breaking news that will change everything...", url: "/article/3", date: "2024-03-13" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center font-serif text-red-800">HOAX.COM</h1>
        <div className="bg-white p-6 shadow-lg">
          {articles.map((article) => (
            <ArticleLink key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
