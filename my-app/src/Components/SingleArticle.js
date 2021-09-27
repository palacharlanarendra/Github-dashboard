import React from 'react';
// import { Link } from 'react-router-dom';
import Aside from './Aside';
import data from '../data';
function SingleArticle(props) {
  console.log(props.match.params.slug, data, 'singlearticle');
  let filter = data.reduce((acc, article) => {
    if (article.slug === props.match.params.slug) {
      return acc.concat(article);
    }
    return acc;
  }, []);
  return (
    <>
      <div className='container'>
        <Aside />
        <article key={filter[0].slug}>
          <h2>{filter[0].title}</h2>
          <h2>{filter[0].author}</h2>
        </article>
      </div>
    </>
  );
}

export default SingleArticle;
