import { useQueries, useQuery } from "@tanstack/react-query"
import { $api } from "../../api/api"


export const getProducts = async () => {
    const response = await $api.get('/products')
    return response.data
}

export const useProductsList = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
}