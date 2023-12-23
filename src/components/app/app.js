import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.css';
import Layout from '../../routes/Layout';
import ArticlePage from '../../routes/atriclePage';
import ArticlesPage from '../../routes/articlesPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<ArticlesPage />} />
        <Route path={'articles'} element={<ArticlesPage />} />
        <Route path={'articles/:slug'} element={<ArticlePage />} />
      </Route>
    </Routes>
  );
};

export default App;
