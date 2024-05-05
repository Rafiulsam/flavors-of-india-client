import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Register from "../Pages/Register";

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
    },
    // Login Layout
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }  
])

export default router