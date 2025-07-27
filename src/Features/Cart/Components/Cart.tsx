
import { LinkAsButton } from '@/components/MicroComps/LinkAsButton/LinkAsButton';
import { Button } from '@/components/ui/button';
import { useCart } from '@/Features/Cart/Context/CartContext';
import { MdDelete } from "react-icons/md";
import { GiBroom } from "react-icons/gi";
import MainToolTip from '@/components/MicroComps/MainToolTip/MainToolTip';



export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();
    


  return (
    <>


        <div className={`max-w-screen-xl mx-auto py-58 px-4 `}>
                <div className="flex flex-row justify-center items-center gap-12 mb-4 headingStack">
                   <h2 className="text-2xl font-semibold text-center ">
                        Shopping Cart Status: {cart.length}
                    </h2>


                    {cart.length !== 0 && (
                        <Button  onClick={clearCart}> 
                                    <MainToolTip tipContent="Clear Cart" tipEle={ <GiBroom color='gold' size={58} />} />    
                                    
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {cart.map((item) => (
                    <div key={item.id} className="flex justify-center items-center">
                        <div className=" shadow-[0_0_20px_#aaa] rounded-[10px] overflow-hidden transition-all duration-300 relative flex flex-col items-center p-2 w-[300px] h-[500px]">
                        
                    
                            <div className="absolute top-2 right-2 text-2xl ">
                                <Button onClick={() => removeFromCart(item.id)}>
                                    <MainToolTip tipContent="Delete Product" tipEle={  <MdDelete color='red' />} />    
                                   
                                    </Button>
                            </div>
                      

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[65%] object-cover border-2 border-gray-300 rounded"
                        />

                        <div className="p-3 text-center">
                            <h3 className="text-lg font-semibold mb-1">
                            {item.title.split(" ").slice(0, 4).join(" ")}
                            </h3>
                            <p className="text-sm text-white">
                            E£ {item.price.toFixed(2)}
                            </p>
                        </div>

                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-8 text-center">

                    {cart.length !== 0 ? (
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <LinkAsButton BtnText='Products' link='/products'/>
                    </div>
                    ) : (
                    <div className="flex justify-center items-center mt-8">
                        <LinkAsButton BtnText='Products' link='/products'/>
                    </div>
                    )}
                </div>
        </div>

    </>
  )
}
