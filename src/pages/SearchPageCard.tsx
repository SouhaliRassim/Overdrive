
import { Link } from 'react-router-dom';

type SearchPageCardProps = {
  SearchO: any;
};

const SearchPageCard = ({ SearchO }: SearchPageCardProps) => {
  return (
    <div className='flex flex-col  gap-3 xs:max-md:mt-7 justify-center items-center'>
      <Link to={`/anime/${SearchO.mal_id}`} key={SearchO.mal_id}>
        <img src={SearchO.images.jpg.image_url} alt="" 
        className='w-[11rem] h-[15rem] rounded-xl shadow-xl xs:max-md:h-[5rem] xs:max-md:w-[7rem]' />
      </Link>
      <h3 className='text-white w-[13rem] h-10 lg:text-sm text-center xs:max-md:w-[6rem] xs:max-md:text-xs'>{SearchO.title}</h3>
    </div>
  );
};

export default SearchPageCard;
