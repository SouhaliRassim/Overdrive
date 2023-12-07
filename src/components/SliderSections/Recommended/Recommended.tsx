import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { RecommendedCard } from './RecommendedCard';
import './Styles.css';



const Recommended = () => {
  const { data: Recom } = useQuery({
     queryKey: ["cat"],
     queryFn: () => {
       return Axios.get("https://api.jikan.moe/v4/recommendations/anime").then((res) => res.data);
     },
  });
 
  console.log(Recom);

  return (
    <div className='xs:max-md:h-1/2 h-screen w-screen bg-[#2B2E5F] flex flex-col justify-center items-center  '>
  <h3 className='lg:text-5xl font-bold text-white mt-6'><span className='text-[#AAB6F3]'>今後の予定 </span>--<span className='underline decoration-[#AAB6F3]'>RECOMMENDED</span></h3>
  <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper h-screen w-screen xs:max-md:h-full sample-slider2 lg:mt-2"
    >
      
      {Recom && Recom.data ? (
        Recom.data.slice(0, 8).map((anime: any, index: number) => (
         <div className='xs:max-md:'>
         <SwiperSlide key={index} className='Slider-swiper '>
            <RecommendedCard anime={anime} />
          </SwiperSlide>
          </div>
        ))
      ) : (
        <h3 className='text-white'>No data to display</h3>
      )}
      </Swiper>
      
  </div>
 
  );
};

export default Recommended;