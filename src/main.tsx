
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './pages/Layout.tsx';
import SearchPage from './pages/SearchPage.tsx';
import AnimeDisc from './pages/AnimeDiscPage/AnimeDisc.tsx';


const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<App/>}>
   <Route path='' element={<Layout/>}/>
     <Route path='SearchPage' element={<SearchPage/>}/>   
     <Route path='anime/:id' element={<AnimeDisc/>}/> 
  </Route>
 ));

ReactDOM.createRoot(document.getElementById('root')!).render(

  
   <RouterProvider router={router} />
  

)
