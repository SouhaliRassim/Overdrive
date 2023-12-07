
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';

interface Anime {
  title: string;
  title_english: string;
  type: string;
  synopsis: string;
  episodes: string;
  season: string;
  status: string;
  popularity: string;
  rank: string;
  score: string;
  trailer: {
    embed_url: string;
 };
  images: {
    jpg: { image_url: string };
    // Other image types, e.g., png, gif, etc.
   };
   
   airing: boolean;

 }
type Props = {}

const AnimeDisc: React.FC<Props> = () => {
 const { id } = useParams<{ id: string }>()
 console.log(id)

 const [anime, setAnime] = useState<Anime | null>(null)

 const getAnime = async (animeId: string) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
    const data = await response.json()
    setAnime(data.data as Anime)
    console.log(data.data)
 }

 useEffect(() => {
    if (id) {
      getAnime(id)
    }
 }, [id])

 return (
    <div className='w-screen h-screen bg-[#2B2E5F] flex flex-col  justify-center items-center gap-3'>
      <div className='flex pt- gap-10 pt- h-'>
        <div className='flex flex-col gap-'>
        <img src={anime ? anime.images.jpg.image_url : 'Loading...'} alt=""  className='w-[16rem] h-[23rem]  border-[#AAB6F3] border-[4px] rounded-xl'/>
        <h3 className='text-2xl text-center text-white font-semibold w-[16rem]'>{anime ? anime.title_english : 'Loading...'}</h3> 
        </div> 
      <div className='flex flex-col gap-'>
    
    
    <div className='grid grid-cols-5 grid-rows-  grid-flow-row-dense text-white font-medium bg-tansparent gap-2 h-[26rem] w-[70rem] text-center'>
      <div className='  bg-[#1A1C3D] text-center px-[3rem] py-[1rem]  rounded-xl flex justify-center items-center '>Rating: {anime ? anime.score : 'Loading...'}</div>
      <div className='  bg-[#1A1C3D] text-center px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Ranking {anime ? anime.rank : 'Loading...'}</div>
      <div className=' bg-[#1A1C3D] text-center  px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Popularity {anime ? anime.popularity : 'Loading...'} </div>
      <div className='  bg-[#1A1C3D] text-center col-span-2 row-span-3 flex items-center justify-center'>
      <div className='h-full w-full object-cover rounded-xl'>
      <ReactPlayer
        url={anime ? anime.trailer.embed_url : 'Loading...'}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        controls={true}
        light={true}
      />
      </div>
      </div>
      <div className='  bg-[#1A1C3D] text-center px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>{anime ? anime.status : 'Loading...'}</div>
      <div className='  bg-[#1A1C3D] text-center px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Season: {anime ? anime.season : 'Loading...'}</div>
      <div className='  bg-[#1A1C3D] text-centerpx-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Type: {anime ? anime.type : 'Loading...'}</div>
      
      <div className='  bg-[#1A1C3D] text-center  px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Episodes : {anime ? anime.episodes : 'Loading...'}</div>
     
      
      <div className='  bg-[#1A1C3D] text-center px-[rem] col-span-2 row-span-1 rounded-xl flex justify-center items-center'>
        <h3>Reviews</h3>
      </div>
      <div className='  bg-[#AAB6F3] hover:bg-white hover:text-black text-center cursor-pointer col-span-2 px-[3rem] py-[1rem] rounded-xl flex justify-center items-center '>Add To My List</div>
      <div className='  bg-[#1A1C3D] text-center  col-span-3 row-span-1 rounded-xl flex justify-center items-center '>
        
        <div className='flex flex-row items-center justify-center  pt-4 gap-3 '>
        
        <h3>Tags: </h3> 
        
    
        </div>
      </div>
      
    
      
      
      
      
      
      
      
    </div>
    </div>
    </div>                          {/*
                                               <div className='bg w-full mt-4 pl-14 flex flex-col gap-4'>
                                                <h3 className='text-2xl font- text-white'>Charecters and Voice Actors:</h3>
                                                <div className='flex justify-evenly items-center'>
                                                                            <div className='bg-[#1A1C3D] w-1/4 h-auto flex flex-row gap-4 rounded-xl'>
                                                                                                <img src="https://www.nautiljon.com/images/perso/00/81/frieren_21818.webp" alt=""
                                                                                                className='w-[9rem] h-[9rem] rounded-l-xl' />
                                                                                                <div className='flex flex-col justify-center '>
                                                                                                      <h3 className='text-base font-semibold text-white'>Frieren</h3>
                                                                                                      <h3 className='text-base text-white' >Voice Actor : Thunder cock</h3>
                                                                                                </div>
                                                                            </div>
                                                                            <div className='bg-[#1A1C3D] w-1/4 h-auto flex flex-row gap-4 rounded-xl'>
                                                                                                <img src="https://www.nautiljon.com/images/perso/00/81/frieren_21818.webp" alt=""
                                                                                                className='w-[9rem] h-[9rem] rounded-l-xl' />
                                                                                                <div className='flex flex-col justify-center '>
                                                                                                      <h3 className='text-base font-semibold text-white'>Frieren</h3>
                                                                                                      <h3 className='text-base text-white' >Voice Actor : Thunder cock</h3>
                                                                                                </div>
                                                                            </div>
                                                                            <div className='bg-[#1A1C3D] w-1/4 h-auto flex flex-row gap-4 rounded-xl'>
                                                                                                <img src="https://www.nautiljon.com/images/perso/00/81/frieren_21818.webp" alt=""
                                                                                                className='w-[9rem] h-[9rem] rounded-l-xl' />
                                                                                                <div className='flex flex-col justify-center '>
                                                                                                      <h3 className='text-base font-semibold text-white'>Frieren</h3>
                                                                                                      <h3 className='text-base text-white' >Voice Actor : Thunder cock</h3>
                                                                                                </div>
                                                                            </div>
                                                                            </div>
                                               </div> */}
    <div className='  bg-[#1A1C3D] text-white mx-10 py-4 text-start px-5 h-[rem] flex flex-col gap rounded-xl'>
        <p className='font-normal '><span className='font-bold'>Synopsis:</span> <br /> {anime ? anime.synopsis : 'Loading...'}</p>
      </div>
    </div>
 )
}

export default AnimeDisc;