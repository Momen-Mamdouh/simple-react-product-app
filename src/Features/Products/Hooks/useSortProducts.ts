
import { useEffect, useState} from "react";
import type { IProduct } from "../Interfaces/IProduct";

interface IProductProps{
    products:IProduct[],
}

export default function useSortProducts({products}:IProductProps) {
    const [productsArr, setProductsArr] = useState<IProduct[]>(products);
    const [sort, setSort] = useState<string>('');


    useEffect(() => {
        if (products && products.length > 0) {
            setProductsArr(products);
        }
    }, [products]);

    

    useEffect(()=>{
         if (!products) return;

        let sorted = [...products];

        if(sort ==='A-Z' || sort === ''){
            setProductsArr(sorted.sort((a, b) => a.title.localeCompare(b.title)));
        }else if(sort ==='Z-A'){
            setProductsArr(sorted.sort((a, b) => a.title.localeCompare(b.title)).reverse());
        }
        else if(sort ==='low'){
            setProductsArr(sorted.sort((a, b) => a.price - b.price));
        }
        else if(sort ==='high'){
            setProductsArr(sorted.sort((a, b) => b.price - a.price));
        }
     },[sort, products]);

 

     return {sort, setSort, productsArr}
}
