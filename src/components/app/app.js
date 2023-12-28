import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.css';
import Layout from '../../routes/Layout';
import ArticlePage from '../../routes/atriclePage';
import ArticlesPage from '../../routes/articlesPage';
import RegisterPage from '../../routes/registerPage';
import LoginPage from '../../routes/loginPage';
import EditProfilePage from '../../routes/editProfilePage';
import CreateArticlePage from '../../routes/createArticlePage';
import EditArticlePage from '../../routes/editArticlePage';
import PrivateRout from '../hoc/private-rout';
import NotFoundPage from '../../routes/notFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<ArticlesPage />} />
        <Route path={'articles'} element={<ArticlesPage />} />
        <Route path={'articles/:slug'} element={<ArticlePage />} />
        <Route path={'sign-up'} element={<RegisterPage />} />
        <Route path={'sign-in'} element={<LoginPage />} />
        <Route
          path={'profile'}
          element={
            <PrivateRout>
              <EditProfilePage />
            </PrivateRout>
          }
        />
        <Route
          path={'new-article'}
          element={
            <PrivateRout>
              <CreateArticlePage />
            </PrivateRout>
          }
        />
        <Route
          path={'articles/:slug/edit'}
          element={
            <PrivateRout>
              <EditArticlePage />
            </PrivateRout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
