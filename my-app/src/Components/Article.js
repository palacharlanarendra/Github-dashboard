import React from 'react';
import { Link } from 'react-router-dom';
import SingleArticle from './SingleArticle';
function Article(props) {
  return (
    <>
      <article key={props.article.slug}>
        <Link to={`/post/${props.article.slug}`}>
          <h2>{props.article.title}</h2>
        </Link>
      </article>
    </>
  );
}

export default Article;
