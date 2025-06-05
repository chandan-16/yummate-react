import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// Chunking 
// Code Splitting 
// Dynamic Bundling 
// Lazy Loading 
// Ondemand Loading 
// Dynamic Import 

const Grocerry = lazy(() => import('./components/Grocerry'));

export const AppLayout = () => {


  // const [userName, setUserName] = useState();

  // useEffect(() => {
  //   const data = {
  //     name : "Chandan Gautam"
  //   }
  //   setUserName(data.name)
  // },[])

  return (
   
        <div className='app'>
          <Header />
          <Outlet />
          <Footer />
        </div>   
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/grocerry",
        element : <Suspense fallback={<h1 className='text-center text-5xl py-10'>Loading...</h1>}> <Grocerry /> </Suspense> 
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : "/restaurant/:id",
        element : <RestaurantMenu />
      }
    ],
    errorElement : <Error />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 <Provider store={appStore} >
  <React.StrictMode>
      <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
</Provider>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
