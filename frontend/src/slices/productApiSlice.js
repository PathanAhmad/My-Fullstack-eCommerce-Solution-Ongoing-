import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice'

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({  // Add use and Query to this name, ie, getProdects when exporting as a naming convention
            query: () => ({
                url: PRODUCTS_URL
            }),
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApiSlice; 