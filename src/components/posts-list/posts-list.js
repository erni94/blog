import React, { useState } from 'react';
import { Pagination } from 'antd';

import PostHeader from '../post-header/post-header';
import { useGetArticlesQuery } from '../../store/commonAPI';
import './posts-list.css';

const PostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * 5;

  const { data, error, isLoading } = useGetArticlesQuery(offset);

  const articles = data?.articles || [];
  const articlesCount = data?.articlesCount || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="posts-list">
        {articles.map((article) => (
          <PostHeader key={article.slug} article={article} shadow={true} />
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
