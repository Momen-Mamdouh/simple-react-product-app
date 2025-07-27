import { useProductsQuery } from '@/Features/Products/Hooks/useProductsQuery';
import type { IProduct } from '@/Features/Products/Interfaces/IProduct';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useFilteredProductDetails(){
    const {id:productId} = useParams();
    const {data:products} = useProductsQuery();
    const [product, setproduct] = useState<IProduct[]>([] as IProduct[])
        
        useEffect(()=>{
            if(!products) return;
            const product:IProduct[] = products.filter((item:IProduct)=> item.id === Number(productId));
            setproduct(product)
        },[products,productId])
    
    

    return {product}
}