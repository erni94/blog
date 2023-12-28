import React, { useState } from 'react';
import { Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';

import formatDate from '../../utils/formatDate';
import './post-header.css';
import Favorite from '../favorite/favorite';

const PostHeader = ({ article, shadow, isLoggedIn }) => {
  const {
    slug,
    title,
    description,
    favorited,
    favoritesCount,
    tagList,
    author: { username, image },
    createdAt,
  } = article;

  const [likeArticle, setLikeArticle] = useState(favorited);
  const [favoriteCount, setFavoriteCount] = useState(favoritesCount);


  const setLike = (value) => {
    if (value) {
      setLikeArticle(true);
      setFavoriteCount(favoriteCount + 1);
    } else {
      setLikeArticle(false);
      setFavoriteCount(favoriteCount - 1);
    }
  };

  return (
    <div className={`post ${shadow ? 'shadow-box' : ''}`}>
      <div className='post__content'>
        <div className='post__header'>
          <Link to={`/articles/${slug}`} className='post__title'>
            {title}
          </Link>
          <div className='post__likes'>
            <Favorite isLoggedIn={isLoggedIn} isFavorited={likeArticle} slug={slug} changeLike={setLike} />
            <span className={'post__likes-count'}>{favoriteCount}</span>
          </div>
        </div>
        <div className='post__tags'>
          {tagList.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className='post__text'>{description}</div>
      </div>
      <div className='post__user-info'>
        <div className='user-info'>
          <div className='user-info__name'>{username}</div>
          <div className='user-info__date'>{formatDate(createdAt)}</div>
        </div>
        <Avatar size={64} src={image} />
      </div>
    </div>
  );
};

export default PostHeader;
