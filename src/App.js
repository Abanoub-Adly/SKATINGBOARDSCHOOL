import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom'
import HomePageRout from './components/HomePageRout';
import AboutPageRout from './components/AboutPageRout';
import SkatingPageRout from './components/SkatingPageRout';
import ShopPageRout from './components/ShopPageRout';
import ContactUsPageRout from './components/ContactUsPageRout';

function App() {
  const rout = createHashRouter([
    {
      path: '/',
      element: <HomePageRout />,
    },
    {
      path: '/about',
      element: <AboutPageRout />,
    },
    {
      path: '/skating',
      element: <SkatingPageRout />
    },
    {
      path: '/shop',
      element: <ShopPageRout />
    },
    {
      path: '/contact',
      element: <ContactUsPageRout />
    }
  ]);
  return (
    <div className="App">
    <RouterProvider router={rout}></RouterProvider>
    </div>
  );
}
export default App;
