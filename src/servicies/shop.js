import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi ({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder)=> ({
        getProducts:builder.query({
            query:() =>"products.json"
        }),
        getCategories:builder.query({
            query:() =>"categories.json"
        }),
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi
