import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../layout/Main/Main";
import Blog from "../components/Blog";

const router = createBrowserRouter([
    // Main Layout
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog/>
            }
        ]
    }
])

export default router