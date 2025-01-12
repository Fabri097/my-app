import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["updateImageProfile"],
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    patchImageProfile: builder.mutation({
      query: ({ localId, image }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
      invalidatesTags: ["updateImageProfile"],
    }),
    getUser: builder.query({
      query: ({ localId }) => `users/${localId}.json`,
      providesTags: ["updateImageProfile"],
    }),
  }),
});

export const { usePatchImageProfileMutation, useGetUserQuery } = userApi;
