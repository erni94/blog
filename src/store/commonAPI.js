import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const user = JSON.parse(localStorage.getItem('user'));

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api/' }),
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getArticles: build.query({
      method: 'GET',
      query: (offset = 0) => ({
        url: `articles?offset=${offset}&limit=5`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: user && user.token ? `Token ${user.token}` : '',
        },
        providesTags: ['Articles'],
      }),
    }),
    getArticle: build.query({
      headers: {
        'Content-Type': 'application/json',
        Authorization: user && user.token ? `Token ${user.token}` : '',
      },
      method: 'GET',
      query: (slug) => ({
        url: `articles/${slug}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: user && user.token ? `Token ${user.token}` : '',
        },
      }),
    }),
    registerUser: build.mutation({
      query(userData) {
        return {
          url: '/users',
          method: 'POST',
          body: { user: userData },
        };
      },
    }),
    loginUser: build.mutation({
      query(userData) {
        return {
          url: '/users/login',
          method: 'POST',
          body: { user: userData },
        };
      },
    }),
    updateUser: build.mutation({
      query(userData) {
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: '/user',
          method: 'PUT',
          body: { user: userData },
        };
      },
    }),
    createArticle: build.mutation({
      query(articleData) {
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: '/articles',
          method: 'POST',
          body: articleData,
        };
      },
    }),
    editArticle: build.mutation({
      query({ data, slug }) {
        console.log('articleData:', data);
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: `/articles/${slug}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    deleteArticle: build.mutation({
      query(slug) {
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: `/articles/${slug}`,
          method: 'DELETE',
        };
      },
    }),
    favoriteArticle: build.mutation({
      query(slug) {
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: `/articles/${slug}/favorite`,
          method: 'POST',
          invalidatesTags: ['Articles'],
        };
      },
    }),
    unFavoriteArticle: build.mutation({
      query(slug) {
        return {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user.token}`,
          },
          url: `/articles/${slug}/favorite`,
          method: 'DELETE',
          invalidatesTags: ['Articles'],
        };
      },
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useCreateArticleMutation,
  useEditArticleMutation,
  useDeleteArticleMutation,
  useFavoriteArticleMutation,
  useUnFavoriteArticleMutation,
} = api;
export default api;
