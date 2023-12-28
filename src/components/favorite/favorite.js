import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React from 'react';

import { useFavoriteArticleMutation, useUnFavoriteArticleMutation } from '../../store/commonAPI';

const UnLike = ({ slug, favoriteArticle, changeLike }) => {
  const handleClick = () => {
    favoriteArticle(slug);
    changeLike(true);
  };

  return <HeartOutlined style={{ color: 'rgba(0, 0, 0, 0.75)', cursor: 'pointer' }} onClick={handleClick} />;
};

const Like = ({ slug, unFavoriteArticle, changeLike }) => {
  const handleClick = () => {
    unFavoriteArticle(slug);
    changeLike(false);
  };

  return <HeartFilled style={{ color: '#FF0707', cursor: 'pointer' }} onClick={handleClick} />;
};

const DisabledLike = () => {
  return <HeartOutlined style={{ color: 'rgba(0, 0, 0, 0.75)' }} />;
};

const Favorite = ({ isLoggedIn, isFavorited, slug, changeLike }) => {
  const [favoriteArticle, { error, isLoading }] = useFavoriteArticleMutation();
  const [unFavoriteArticle, { error2, isLoading2 }] = useUnFavoriteArticleMutation();

  if (isLoggedIn) {
    if (isFavorited) {
      return <Like slug={slug} unFavoriteArticle={unFavoriteArticle} changeLike={changeLike} />;
    } else {
      return <UnLike slug={slug} favoriteArticle={favoriteArticle} changeLike={changeLike} />;
    }
  }
  return <DisabledLike />;
};

export default Favorite;
