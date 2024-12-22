import { createBrowserRouter, RouterProvider } from "react-router-dom";


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

export default App;
