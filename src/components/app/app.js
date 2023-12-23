import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.css';
import Layout from '../../routes/Layout';
import PostsList from '../posts-list/posts-list';
import ArticlePage from '../../routes/atriclePage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path={'articles'} element={<PostsList />} />
        <Route path={'articles/:id'} element={<ArticlePage />} />
      </Route>
    </Routes>
  );
};

export default App;
