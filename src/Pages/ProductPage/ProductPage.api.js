import { useQuery } from "@tanstack/react-query"
import { $api } from "../../api/api"


const getProduct = async (id) => {
    const response = await $api.get(`/products/${id}`)
    return response.data
}

export const useProductList = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id),
        enabled: !!id
    })
}