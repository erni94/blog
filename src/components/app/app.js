import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.css';
import Layout from '../../routes/Layout';
import ArticlePage from '../../routes/atriclePage';
import ArticlesPage from '../../routes/articlesPage';
import RegisterPage from '../../routes/registerPage';
import LoginPage from '../../routes/loginPage';
import EditProfilePage from '../../routes/editProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<ArticlesPage />} />
        <Route path={'articles'} element={<ArticlesPage />} />
        <Route path={'articles/:slug'} element={<ArticlePage />} />
        <Route path={'sign-up'} element={<RegisterPage />} />
        <Route path={'sign-in'} element={<LoginPage />} />
        <Route path={'profile'} element={<EditProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
