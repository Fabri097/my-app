import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cartApi = createApi({
    reducerPath:"cartApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    tagTypes:["addProduct","deleteProduct"],
    endpoints:(builder)=> ({
        getCart:builder.query({
            query:({localId}) => `carts/${localId}.json`,
            transformResponse:(response) => {
                if(!response){
                    return null
                }
                const entriesWithIds = Object.entries(response).map(item => ({...item[1],id:item[0]}))
                const data = entriesWithIds.filter(item => item !== null)
                return data
            },
            providesTags:["addProduct","deleteProduct"]
        }),
        getProductCart:builder.query({
            query:({localId,productId}) => `carts/${localId}/${productId}.json`,
            providesTags:["addProduct","deleteProduct"]
        }),
        postCart:builder.mutation({
            query:({localId,cartProduct}) => ({
                url:`carts/${localId}/${cartProduct.id}.json`,
                method:"PUT",
                body:cartProduct
            }),
            invalidatesTags:["addProduct"]
        }),
        deleteCartProduct:builder.mutation({
            query:({localId,productId})=> ({
                url:`carts/${localId}/${productId}.json`,
                method:"DELETE",
            }),
            invalidatesTags:["deleteProduct"]
        }),
        deleteCart:builder.mutation({
            query:({localId})=> ({
                url:`carts/${localId}.json`,
                method:"DELETE",
            }),
            invalidatesTags:["deleteProduct"]
        })

    })
})

export const { useGetCartQuery, 
    usePostCartMutation,
    useDeleteCartProductMutation,
    useDeleteCartMutation,
    useGetProductCartQuery
} = cartApi