
import styles from './ProductCard.module.css'
import CardPaymentColIcons from "@/components/MicroComps/CardPaymentColIcons/CardPaymentColIcons";
import type { IProduct } from '../../Interfaces/IProduct';

export default function ProductCard({product}:{product:IProduct}) {
  return (
        <>
    
            <div className={`${styles.book} group flex flex-col justify-start items-end font-jim overflow-hidden`}
                     style={{ backgroundImage: `url(${product?.image})` }}>
                        <CardPaymentColIcons productId={product?.id} product={product} />

                <div className={`${styles.cover} flex flex-col items-center gap-5`}>
                    <h3 className='text-xl text-center card_title'>{product?.title.split(" ", 4).join(" ")}</h3>
                    <p className='text-xl  text-center px-6  cardAuthor'>Category: {product?.category}</p>
                    <p className='text-xl text-center px-6  cardAuthor'>Description: {product?.description?.split(" ").slice(0, 2).join("")}</p>
                    <p className='text-xl text-black text-center main_fontSize p-2.5 bg-yellow-300  rounded-full  cardPrice'>{product?.price  ?? '100'} E£ </p>

                </div>
            </div>

        </>
    
  )
}
