// import BookDetailsTabs from "@/components/BookDetailsTabs"

import Rating from "@/components/MicroComps/Rating/Rating";
import useFilteredProductDetails from "../../Hooks/useFilteredProductDetails"
import MainHeader from "@/components/MainComps/MainHeader/MainHeader";




export default function ProductDetails() {
    
    const { product }  = useFilteredProductDetails();
    const integerRate = Math.round((product[0]?.rating?.rate));


  return (
    <>

         <MainHeader  headerText="Product Details" bgImg={product[0]?.image}/>
   

        <section className="py-32">
        <div className="container mx-auto flex flex-col gap-20">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        
            <div className="w-[70%] sm:w-[60%] md:w-[30%] mx-auto">
                <img
                src={product[0]?.image}
                alt={product[0]?.title}
                loading="eager"
                className="w-full h-auto rounded-lg"
                />
            </div>

        
            <div className="w-full md:w-[65%] flex flex-col items-start lg:items-start pt-4 md:pt-4 md:pl-6">
                <h1 className="text-4xl font-bold product_title text-center lg:text-left">{product[0]?.title.split(" ", 4).join(" ")}</h1>

                <div className="flex flex-col  justify-start items-start gap-8 w-full mt-4">
                <h2 className="text-xl productCategory">Category:{product[0]?.category}</h2>

                <span className="product_price bg-yellow-500 text-white text-lg p-2 rounded-xl">
                    {product[0]?.price} E£
                </span>

                
                </div>

                <div className="text-lg md:text-xl  flex gap-10 items-center"><Rating productRating={integerRate} /> 
                        <span className='ratingNumber bg-yellow-300 rounded-2xl p-1 px-2.5'>{integerRate}</span>
                </div>

                <div className="text-lg md:text-xl  flex gap-10 items-center pe-6"> {product[0]?.description}</div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-6 productBtnsStack">
        
                {/* <CartBtn
                    btnType="button"
                    btnTitle="Add to Cart"
                    customizedBtnStyles="btnYellow"
                    customWidth="auto"
                    isDisabled={false}
                    btnIconColor="gold"
                    cartPayLoad={bookToDB}
                /> */}
                </div>

            
            </div>
            </div>


        </div>
        </section>

     </>
  )
}
