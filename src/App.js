import { createBrowserRouter, RouterProvider } from "react-router-dom"


// eslint-disable-next-line no-unused-vars
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