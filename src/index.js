import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import Body from './components/Body';
import Header from './components/Header';

export const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
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
    path : "/cart",
    element : <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <React.StrictMode>
      <Header />
      <Body />
      <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
</>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
