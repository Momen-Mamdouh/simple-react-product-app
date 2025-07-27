import { LinkAsButton } from '@/components/MicroComps/LinkAsButton/LinkAsButton';
import Rating from '@/components/MicroComps/Rating/Rating';
import type { IProduct } from '@/Features/Products/Interfaces/IProduct';



export default function HomeSlide({slide}:{slide:IProduct}) {
  const integerRate = Math.round((slide?.rating?.rate));

  return (

        <div className='swiperSlide h-screen '>
          <div className="swpierslide bg-center bg-contain  h-3/4 relative overflow-hidden"
              style={{backgroundImage:`url(${slide.image})`}}>
  

              <div className="childOfSlide grid grid-cols-12  h-full ">

                <div className={`mainProductInfo  bg-slate-200/75  rounded-xl 
                    flex flex-col justify-center items-start p-5  col-start-8 col-span-7 text-black`}>
                    <div className="productInfo flex flex-col gap-5">
                        <h3 className="text-[1rem] md:text-[2rem] font-semibold">{slide?.title}</h3>
                        <p className="text-lg md:text-xl  mb-5 ">Price: 
                            <span className='ratingNumber ms-2.5 bg-yellow-300 rounded-2xl p-1 px-2.5'>{slide?.price} E£</span></p>
                        <p className="text-lg md:text-xl ">Category: {slide?.category} </p>
                        <div className="text-lg md:text-xl  flex items-center"><Rating productRating={integerRate} /> 
                                <span className='ratingNumber bg-yellow-300 rounded-2xl p-1 px-2.5'>{integerRate}</span></div>
                        <div className="toDetailsBtn w-1/2">
                            <LinkAsButton link={`/prodcuts/${slide.id}`} BtnText={'Product Details'} />
                        </div>
                    </div>
                </div>
              </div>
          </div>

        </div>

      )

}
