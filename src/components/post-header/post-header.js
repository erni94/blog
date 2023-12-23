import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';

import formatDate from '../../utils/formatDate';
import './post-header.css';

const PostHeader = ({ article, shadow }) => {
  const {
    slug,
    title,
    description,
    favoritesCount,
    tagList,
    author: { username, image },
    createdAt,
  } = article;

  return (
    <div className={`post ${shadow ? 'shadow-box' : ''}`}>
      <div className="post__content">
        <div className="post__header">
          <Link to={`/articles/${slug}`} className="post__title">
            {title}
          </Link>
          <div className="post__likes">
            <HeartOutlined />
            <span className={'post__likes-count'}>{favoritesCount}</span>
          </div>
        </div>
        <div className="post__tags">
          {tagList.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className="post__text">{description}</div>
      </div>
      <div className="post__user-info">
        <div className="user-info">
          <div className="user-info__name">{username}</div>
          <div className="user-info__date">{formatDate(createdAt)}</div>
        </div>
        <Avatar size={64} src={image} />
      </div>
    </div>
  );
};

export default PostHeader;
