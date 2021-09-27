import React from 'react';
import Article from './Article';
import data from '../data';
function Articles() {
  console.log(data, 'articles section');
  return (
    <div>
      <h2>Articles section</h2>
      {data.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
}

export default Articles;
