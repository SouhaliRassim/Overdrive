
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import NewsCard from './NewsCard';


const News = () => {
  const { data: news} = useQuery({
    queryKey: ["dog"],
    queryFn: () => {
      return Axios.get("https://api.jikan.moe/v4/anime/40748/news").then((res) => res.data);
    },
  });
  
  console.log(news);
    return (
      <div className='w-screen h-screen flex flex-col justify-center bg-[#404595]'>
      <div className='text-center pb-9'>
       <h3 className='text-5xl font-bold text-white mt-3'><span className='text-[#AAB6F3]'>記事 </span>--<span className='underline decoration-[#AAB6F3]'>ARTICLES</span></h3>
     </div>
      <div className=' flex flex-col gap-3'>
            {news && news.data ? (
        news.data.slice(0, 2).map((news: any) => (
          
           <a href={news.url}> <NewsCard news={news} /></a>
          
        ))
      ) : (
        <h3 className='text-white'>No data to display</h3>
      )}
        </div>
      <div className='flex justify-center'>
      <button className='bg-[#AAB6F3] px-7 py-1 mt-2 rounded-xl text-white font-medium'>More Articles</button>
      </div>
    </div>
    );
};

export default News;