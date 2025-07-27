import type { IProduct } from "@/Features/Products/Interfaces/IProduct";
import ProductCard from "@/Features/Products/Components/ProductCard/ProductCard";
import { useProductsQuery } from '@/Features/Products/Hooks/useProductsQuery';
import ResponseLoader from "@/components/Loaders/ResponseLoader/ResponseLoader";
import useSortProducts from "../../Hooks/useSortProducts";
import SortingInput from "@/components/MicroComps/SortingInput/SortingInput";
import ErrorModal from "@/components/MainComps/ErrorModal/ErrorModal";




export default function ProductsSection() {

    const {data:products, isLoading, error } = useProductsQuery();
    const { setSort, productsArr } = useSortProducts({products});


  return(
    <>
        {error && !products && <ErrorModal errName={error.name} errMessgae={error.message} /> }
        {isLoading && <ResponseLoader />}

 
        { !isLoading && productsArr &&
        <div className='cardsComp diagonal-background py-16'>
            <SortingInput  setSort={setSort}  />
            <div className=' grid gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                            items-center justify-evenly justify-items-center '>
                               
                {productsArr.map((product:IProduct)=> <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
        }
    </>
    )
}
