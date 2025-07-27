
import { TbListDetails } from "react-icons/tb";
import MainToolTip from "@/components/MicroComps/MainToolTip/MainToolTip";
import { Link } from "react-router-dom";
import { useCart } from "@/Features/Cart/Context/CartContext";
import { Button } from "@/components/ui/button"
import type { IProduct } from "@/Features/Products/Interfaces/IProduct";
import { FaCartShopping } from "react-icons/fa6";




export default function CardPaymentColIcons({productId, product}:{productId:number, product:IProduct}){

    const { addToCart } = useCart();



    return (

        <>
            <div className="cardPaymentCol flex flex-col items-center content-center gap-1 
                            bg-green-400/50 rounded-xl p-2 translate-x-[500%] group-hover:translate-x-[150%] 
                             duration-500 delay-400">

                <Link to={`/product/${productId}`}>
                    <MainToolTip tipContent="Product Details" tipEle={ <TbListDetails  className="my-2.5" />} />        
                </Link>


                <MainToolTip tipContent="Add to Cart" tipEle={ <Button className="bg-transparent" onClick={() => addToCart(product)}><FaCartShopping size={24} color="gold" /></Button>} /> 
       

            </div>

        </>

    )
}