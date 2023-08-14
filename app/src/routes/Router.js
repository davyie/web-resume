import Home from "../Components/Home";
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import CurriculumVitae from '../Components/CurriculumVitae';
import {createBrowserRouter} from 'react-router-dom';

export const Router = createBrowserRouter([ 
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/cv",
    element: <CurriculumVitae/>
  }
]);