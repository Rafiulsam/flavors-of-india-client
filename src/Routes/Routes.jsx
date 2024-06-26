import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Register from "../Pages/Register";
import ChefRecipes from "../Pages/ChefRecipes";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";
import FavoriteRecipes from "../Pages/FavoriteRecipes";
import favRecipeLoader from "../loaders/FavRecipeLoader";

const router = createBrowserRouter([
    // Main Layout
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({ params }) => fetch(`https://flavors-of-india-server-rafiul-sams-projects.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'favorite-recipes',
                element: <PrivetRoute><FavoriteRecipes></FavoriteRecipes></PrivetRoute>,
                loader: favRecipeLoader
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