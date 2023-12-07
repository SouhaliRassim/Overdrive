type RecommendedCardProps = {
  anime:any;
}


export const RecommendedCard = ({ anime }: RecommendedCardProps) => {
  return (
   <div className=' h-auto flex flex-col xs:max-md: gap-8 font-bold items-center text-center'>
      
<div className='mt-8'>

    <a href={anime.entry[1].url}> <img src={anime.entry[1].images.jpg.large_image_url} alt={anime.entry[1].url}
     
     className="object-cover xs:max-md:h-[15rem]   h-[29rem] w-[20rem] rounded-xl" /></a>
     
</div>
<div className='lg:h-[3rem] mt-'>
      <h3 className=' text-white xs:max-md:text-base text-lg xs:max-md:w-[8rem] w-[20rem] '>{anime.entry[0].title}</h3>
      </div>
   </div>

  )
}

export default RecommendedCard;