import React from 'react';
import { Button } from 'antd';
import './header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <div>
        <h2 className={'title'}>Realworld Blog</h2>
      </div>
      <Button type="text" className={'signin-button'}>
        Sign In
      </Button>
      <Button className={'signup-button'}>Sign Up</Button>
    </header>
  );
};
export default Header;
