import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api/' }),
  endpoints: (build) => ({
    getArticles: build.query({
      method: 'GET',
      query: (offset = 0) => `articles?offset=${offset}&limit=5`,
    }),
    getArticle: build.query({
      query: (slug) => `articles/${slug}`,
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
          url: '/user',
          method: 'PUT',
          body: { user: userData },
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
} = api;
export default api;
