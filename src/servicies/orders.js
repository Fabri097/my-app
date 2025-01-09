import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi ({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery ({baseUrl:base_url}),
    endpoints:(builder) => ({
        postOrders:builder.mutation({
            query:({...order}) => ({
                url:"orders.json",
                method:"POST",
                body:order
            })
        })
    })
})

export const {usePostOrdersMutation} = ordersApi