import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import  useDebounce  from '../components/hooks/useDebounce';
import SearchPageCard from './SearchPageCard';
import Dawg from "../assets/Animations/Dawg.json" 
import Lottie from 'lottie-react';       
import SearchLoading from "../assets/Animations/SearchLoading.json"
import NoResults from "../assets/Animations/NoResults.json"



const SearchResults = ({ isLoading, data }: { isLoading: boolean, data: { data: any[] } }) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-4'>
      {isLoading && <div className='text-white text-6xl'>Loading...</div>}
      {!isLoading && data && data.data && data.data.slice(0, 12).map((SearchO) => (
        <div key={SearchO.mal_id} className='flex-item'>
          <SearchPageCard SearchO={SearchO} />
        </div>
      ))}
      {!isLoading && data && data.data && data.data.length === 0 && (
        <div className='text-white text-6xl'>
          
          <h3>No Results Found...</h3>
          <Lottie animationData={NoResults} loop={true} />
          </div>
        

      )}
    </div>
  );
}

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce<string>(search, 500);
  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetch(`https://api.jikan.moe/v4/anime?q=${debouncedSearchTerm}`).then(res => res.json());
      }
      return null;
    }
  });

  return (
    <div className='w-screen h-screen flex flex-col justify items-center'>
      <input
        className='w-1/2 mt-4 mb-4 py-2 px-6 rounded-xl font-medium'
        type="search"
        placeholder='Search Anime / example : Naruto'
        onChange={(event) => { setSearch(event.target.value); }}
        value={search}
      />
      <div className='text-center'>
        {isLoading && (
          <div>
            <h3 className='text-white text-6xl font-medium'>Loading...</h3>
            <Lottie animationData={SearchLoading} loop={true} />
            
          </div>
        )}
        {!isLoading && !search && (
          <div className='flex flex-col justify-center items-center' >
            <h3 className='text-white text-6xl xs:max-md:text-4xl font-medium '>Search for anime</h3>
            <Lottie animationData={Dawg} loop={true} className='xs:max-md:w-[20rem] '/>
            
          </div>
        )}
        {!isLoading && data && <SearchResults isLoading={isLoading} data={data} />}
      </div>
    </div>
  );
}

export default SearchBox;