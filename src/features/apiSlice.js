import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookclub-fd761-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books.json",
    }),
  }),
});

export const { useGetBooksQuery } = apiSlice;
