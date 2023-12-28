import React from 'react';
import { Avatar, Button } from 'antd';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../store/reducers';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.rootReducer.isLoggedIn);
  const username = useSelector((state) => state.rootReducer.user.username);
  const image = useSelector((state) => state.rootReducer.user.image);

  if (!isLoggedIn) {
    return (
      <header className={'header'}>
        <div>
          <Link className={'title'} to={'/'}>
            Realworld Blog
          </Link>
        </div>
        <Button onClick={() => navigate('/sign-in')} type="text" className={'signin-button'} size={'large'}>
          Sign In
        </Button>
        <Button onClick={() => navigate('/sign-up')} className={'signup-button'} size={'large'}>
          Sign Up
        </Button>
      </header>
    );
  } else {
    return (
      <header className={'header'}>
        <div>
          <Link className={'title'} to={'/'}>
            Realworld Blog
          </Link>
        </div>
        <Button onClick={() => navigate('/new-article')} className={'create-article-button'}>
          Create article
        </Button>
        <div className={'header__username'} onClick={() => navigate('/profile')}>
          {username}
        </div>
        <Avatar size={46} src={image} className={'header__avatar'} onClick={() => navigate('/profile')} />
        <Button onClick={() => dispatch(logOut())} className={'logout-button'} size={'large'}>
          Log Out
        </Button>
      </header>
    );
  }
};
export default Header;
