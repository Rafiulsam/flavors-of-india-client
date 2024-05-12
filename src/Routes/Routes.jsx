import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Register from "../Pages/Register";
import ChefRecipes from "../Pages/ChefRecipes";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    // Main Layout
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'recipes/:id',
                element: <PrivetRoute><ChefRecipes /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    // Login Layout
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router