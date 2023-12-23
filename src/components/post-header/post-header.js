import React from 'react';
import './post-header.css';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Tag } from 'antd';

const PostHeader = () => {
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__header">
          <div className="post__title">Post title</div>
          <div className="post__likes">
            <HeartOutlined />
            <span className={'post__likes-count'}>12</span>
          </div>
        </div>
        <div className="post__tags">
          <Tag>Tag 1</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 3</Tag>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </div>
      <div className="post__user-info">
        <div className="user-info">
          <div className="user-info__name">User name</div>
          <div className="user-info__date">March 5, 2020</div>
        </div>
        <Avatar size={64} />
      </div>
    </div>
  );
};

export default PostHeader;
