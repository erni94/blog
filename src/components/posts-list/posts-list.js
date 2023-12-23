import React from 'react';

import './posts-list.css';
import PostHeader from '../post-header/post-header';

const PostsList = () => {
  return (
    <div className="posts-list">
      <PostHeader />
      <PostHeader />
      <PostHeader />
      <PostHeader />
      <PostHeader />
    </div>
  );
};

export default PostsList;
