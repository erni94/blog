import React from 'react';
import Markdown from 'react-markdown';

import './article.css';
import PostHeader from '../post-header/post-header';

const Article = () => {
  return (
    <div className={'article shadow-box'}>
      <PostHeader />
      <div className={'article-content'}>
        <Markdown>{'# Hi, *Pluto*!'}</Markdown>
      </div>
    </div>
  );
};

export default Article;
