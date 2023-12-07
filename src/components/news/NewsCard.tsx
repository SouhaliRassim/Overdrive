import React from 'react';

interface News {
 title: string;
 url: string;
 excerpt: string;
 author_username: string;
 images: {
  jpg: { image_url: string };
  // Other image types, e.g., png, gif, etc.
 };
}

interface NewsCardProps {
 news: News;
 
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
 return (
  <div className='flex justify-center items-center gap-3'>
      
  <div className='bg-white w-[80rem] h-[17rem] flex  items-center gap-3 text-black rounded-xl'>
    <div className='relative'>
    <img 
    src={news.images.jpg.image_url}
    alt=""
    className='h-[17rem] w-[20rem] grayscale rounded-l-xl '
    />
    <div className='bg-[#AAB6F3] h-full w-full absolute inset-0 opacity-50 rounded-l-xl '></div>
    </div>
    <div className='flex flex-col w-[55rem] gap-4 pl-10'>
    
    <h3 className='font-bold text-xl'>{news.title}</h3>
    <p className='font-normal '>{news.excerpt}</p>
    <p className='font-medium '>Author : {news.author_username}</p>
    <div className='flex w-full  justify-end itemss-end pr-8'>
    <a href={news.url}><button className='bg-[#AAB6F3] w-[7rem] py-1 text-center rounded-xl text-white '>Read</button></a>
    </div>
    </div>
  </div>
  </div>
 );
};

export default NewsCard;