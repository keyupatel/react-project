import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Products/Product';
import User from './components/User/User';
import Github from './components/Github/Github';

// method 1 for routing 
// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"product",
//         element:<Product />
//       },
//     ]
//   }
// ])

// method 2 for routing using routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='user/:userid' element={<User />} />
        <Route path='github' element={<Github />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);