<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom"


import{About,HomeLayout,Error,Landing,Cocktail,NewsLetter} from './components/Pages/Index'

 const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<HomeLayout/>

    },
    {
      path:"/About",
      element:<About/>

    },
  ]
 )


>>>>>>> b5bc1d46559fc0fd3715d8aa84d2657e5ef8e1a3


import {
  About,
  HomeLayout,
  
  Error,
  Landing,
  Cocktail,
  NewsLetter,
} from "./components/Pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "Cocktail",
        element: <Cocktail />,
      },
      {
        path: "Newsletter",
        element: <NewsLetter />,
      },
      {
        path: "About",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Our Company</h2>,
          },
          {
            path: "Person",
            element: <h2>John Doe</h2>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

<<<<<<< HEAD
export default App;
=======
return <RouterProvider router={router}/>
  
}

export default App
>>>>>>> b5bc1d46559fc0fd3715d8aa84d2657e5ef8e1a3
