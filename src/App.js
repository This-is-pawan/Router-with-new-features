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






const App = () => {
  

return <RouterProvider router={router}/>
  
}

export default App
