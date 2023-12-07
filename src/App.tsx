import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from './components/footer/Footer';
import Navigation from './components/navigationbar/Navigation';
import { Outlet } from 'react-router-dom';



const queryClient = new QueryClient({});
function App() {


  return (
    <div className='bg-[#2B2E5F] '>
    <QueryClientProvider client={queryClient}>
     
      <Navigation/>
      <Outlet/>
      <Footer/>

    </QueryClientProvider>
    </div>
  )
}

export default App
