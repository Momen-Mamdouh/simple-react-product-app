import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import HomeSlide from '@/Features/Home/Components/HomeSlide/HomeSlide';

import { useProductsQuery } from "@/Features/Products/Hooks/useProductsQuery";

import 'swiper/swiper-bundle.css';
import type { IProduct } from '@/Features/Products/Interfaces/IProduct';

import MainLoader from '@/MainLoader';
import ErrorModal from '@/components/MainComps/ErrorModal/ErrorModal';

export default function HomeSwiper() {
  const { data:productsData, isLoading, error } = useProductsQuery();
  

  return (<>
      {error && !isLoading && <ErrorModal errName={error.name} errMessgae={error.message} /> }
      {isLoading && <MainLoader />}
      {productsData && !isLoading && <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={true}
          draggable
          navigation
          spaceBetween={500}
          slidesPerView={1}
        >
          
          {productsData.map((slide:IProduct)=> <SwiperSlide> <HomeSlide slide={slide} />  </SwiperSlide>)}

        </Swiper>
      }
    </>
  )
  
}

