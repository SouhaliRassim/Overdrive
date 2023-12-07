
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    
    <div className="w-screen lg:h-screen overflow-hidden bg-[url('./assets/Images/FrMain.jpg')] flex lg:flex-row lg:justify-between  xs:max-md:flex-col xs:max-md:justify-center xs:max-md:items-center xs:max-md:pt-3 gap- bg-cover" >
    <div className='xs:max-md:text-center  lg:gap-10 lg:justify-center lg:items-center lg:text- lg:w-full lg:flex lg:flex-col '>
                   <h3 className='xs:max-md:text-2xl  lg:text-8xl font-bold text-white xs:max-md:mt-1'>OVERDRIVE</h3>
                   <h3 className='xs:max-md:text-lg  lg:text-4xl font-bold text-[#AAB6F3] xs:max-md:mt-1'>ANIME-MANGA LIBRARY </h3>
                   <p className='xs:max-md:text-sm text-white lg:text-3xl xs:max-md:font-medium'>All the anime and manga in one place!</p> 
                   <button className="hover:bg-white hover:text-black bg-[#AAB6F3] text-white  lg:h-[4rem]  xs:max-md:h-7 rounded-xl lg:text-xl  xs:max-md:text-sm font-semibold px-32"><Link to='https://6568d1ff17a5510df1c3b207--elaborate-bonbon-f2ad06.netlify.app/SearchPage'>Start Searching</Link></button>
   </div>

  </div>

  )
}

export default Header