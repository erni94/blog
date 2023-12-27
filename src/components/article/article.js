import React from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { useDeleteArticleMutation, useGetArticleQuery } from '../../store/commonAPI';
import PostHeader from '../post-header/post-header';
import './article.css';
import { Button, Popconfirm } from 'antd';

const Article = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGetArticleQuery(slug);
  const article = data?.article || {};
  const body = article ? article.body : '';

  const [deleteArticle, { deleteError, deleteIsLoading }] = useDeleteArticleMutation();

  if (!isLoading) {
    return (
      <div className={'article shadow-box'}>
        <PostHeader article={article} shadow={false} />
        <div className={'article-button'}>
          <Popconfirm title={''} placement='right' description={'Are you sure to delete this article?'}
                      onConfirm={() => deleteArticle(slug)}
                      okText='Yes' cancelText='No'>
            <Button danger size={'medium'}>Delete</Button>
          </Popconfirm>
          <Button className={'edit-button'} size={'medium'}>Edit</Button>
        </div>
        <div className={'article-content'}>
          <Markdown>{body}</Markdown>
        </div>
      </div>
    );
  }
};

export default Article;
