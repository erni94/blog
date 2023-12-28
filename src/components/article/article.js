import React from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Popconfirm, Spin } from 'antd';
import { useSelector } from 'react-redux';

import { useDeleteArticleMutation, useGetArticleQuery } from '../../store/commonAPI';
import PostHeader from '../post-header/post-header';

import './article.css';

const Article = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetArticleQuery(slug);

  const isLoggedIn = useSelector((state) => state.rootReducer.isLoggedIn);

  const article = data?.article || {};
  const body = article ? article.body : '';
  const navigate = useNavigate();

  const [deleteArticle] = useDeleteArticleMutation();
  const deleteArticleHandler = (slug) => {
    deleteArticle(slug);
    navigate('/');
  };

  if (!isLoading) {
    return (
      <div className={'article shadow-box'}>
        <PostHeader article={article} shadow={false} isLoggedIn={isLoggedIn} />
        {isLoggedIn && (
          <div className={'article-button'}>
            <Popconfirm
              title={''}
              placement="right"
              description={'Are you sure to delete this article?'}
              onConfirm={() => deleteArticleHandler(slug)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger size={'medium'}>
                Delete
              </Button>
            </Popconfirm>
            <Button className={'edit-button'} size={'medium'} onClick={() => navigate(`/articles/${slug}/edit`)}>
              Edit
            </Button>
          </div>
        )}
        <div className={'article-content'}>
          <Markdown>{body}</Markdown>
        </div>
      </div>
    );
  }

  return (
    <div className={'spin'}>
      <Spin size={'large'} />
    </div>
  );
};

export default Article;
