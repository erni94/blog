import React from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { useGetArticleQuery } from '../../store/commonAPI';
import PostHeader from '../post-header/post-header';
import './article.css';

const Article = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGetArticleQuery(slug);
  const article = data?.article || {};
  const body = article ? article.body : '';

  if (!isLoading) {
    return (
      <div className={'article shadow-box'}>
        <PostHeader article={article} shadow={false} />
        <div className={'article-content'}>
          <Markdown>{body}</Markdown>
        </div>
      </div>
    );
  }
};

export default Article;
