import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectCoverflow, Pagination } from 'swiper/modules';

const Trending = () => {
  return (
    <div className='xs:max-md:h-1/2 w-screen h-screen flex flex-col justify-center items-center bg-[#404595] gap-8 '>
      <h3 className='lg:text-5xl xs:max-md:mt-6 lg:mt-[-4rem] font-bold text-white mt-'><span className='text-[#AAB6F3]'>新しい </span>--<span className='underline decoration-[#AAB6F3]'>NEW</span></h3>
    <Swiper
      navigation={true} 
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper lg:w-1/2  lg: xs:max-md:w-[20rem] xs:max-md:mb-8  "
    >
     
      <SwiperSlide className='  '>
      <div className="relative group  ">
                    <img
                      src="https://c.wallhere.com/photos/f7/bc/Sousou_No_Frieren_anime_grass_flowers_white_hair-2279130.jpg!d"
                      alt=""
                      className="w-full h-auto rounded-lg shadow-xl xs:max-md:h-[14rem]  "
                    />
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                    
                    
                    <button className='bg-white text-black p-2 rounded-lg hover:bg-yellow-600 xs:max-md:p-2 xs:max-md:text-xs '> <a href="https://myanimelist.net/manga/126287/Sousou_no_Frieren">More info</a></button>
                    </div>
                    
      </div>
      <h3 className='text-white text-3xl text-center mt-2 lg:font-semibold '>Frieren beyond journey's end</h3>
      </SwiperSlide>

      <SwiperSlide className='  '>
      <div className="relative group  ">
                    <img
                      src="https://wallpapercave.com/wp/wp12763983.jpg"
                      alt=""
                      className="w-full h-auto rounded-lg shadow-xl xs:max-md:h-[14rem] "
                    />
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                    
                    
                    <button className='bg-white text-black p-2 rounded-lg hover:bg-yellow-600 '> <a href="https://myanimelist.net/manga/126287/Sousou_no_Frieren">More info</a></button>
                    </div>
                    
      </div>
      <h3 className='text-white text-3xl text-center mt-2 lg:font-semibold '>Dark Gathering</h3>
      </SwiperSlide>

      <SwiperSlide className='  '>
      <div className="relative group  ">
                    <img
                      src="https://images8.alphacoders.com/134/1342566.jpeg"
                      alt=""
                      className="w-full h-auto rounded-lg shadow-xl xs:max-md:h-[14rem]"
                    />
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                    
                    <button className='bg-white text-black p-2 rounded-lg hover:bg-yellow-600 '> <a href="https://myanimelist.net/anime/52741/Undead_Unluck?q=undead%20unluck&cat=anime">More info</a></button>
                    </div>
                    
      </div>
      <h3 className='text-white text-3xl text-center mt-2 lg:font-semibold '>Undead Unluck</h3>
      </SwiperSlide>

      

      

     
      
      </Swiper>
      
  </div>
  );
};

export default Trending;
