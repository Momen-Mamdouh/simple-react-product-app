import axios from "axios";

export const fetchAllProducts = async () =>{
    // 
    const baseUrl =  import.meta.env.FAKE_STORE_API_URL ?? 'https://fakestoreapi.com/products';
    const axiosData = await axios.get(baseUrl);
    return axiosData.data;
    
}