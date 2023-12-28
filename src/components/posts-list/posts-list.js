import React, { useState } from 'react';
import { Pagination, Spin } from 'antd';

import PostHeader from '../post-header/post-header';
import { useGetArticlesQuery } from '../../store/commonAPI';

import './posts-list.css';
import { useSelector } from 'react-redux';

const PostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * 5;

  const { data, error, isLoading, isFetching } = useGetArticlesQuery(offset);
  const isLoggedIn = useSelector((state) => state.rootReducer.isLoggedIn);

  const articles = data?.articles || [];
  const articlesCount = data?.articlesCount || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading || isFetching) {
    return (
      <div className="spin">
        <Spin size={'large'} />
      </div>
    );
  }
  return (
    <>
      <div className="posts-list">
        {articles.map((article) => (
          <PostHeader key={article.slug} article={article} shadow={true} isLoggedIn={isLoggedIn} />
        ))}
      </div>
      <Pagination
        style={{ marginBottom: '25px' }}
        current={currentPage}
        onChange={handlePageChange}
        total={Math.ceil(articlesCount / 5)}
        pageSize={5}
        showSizeChanger={false}
      />
    </>
  );
};

export default PostsList;
