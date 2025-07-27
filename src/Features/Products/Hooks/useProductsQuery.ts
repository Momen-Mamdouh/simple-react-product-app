import { fetchAllProducts } from "@/Features/Products/Services/fetchProducts";
import { useQuery } from "@tanstack/react-query";




export const useProductsQuery = () =>{

    return useQuery({
      queryKey: ['fakeStoreAllProducts'],
      queryFn: () => fetchAllProducts(),
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    })

};