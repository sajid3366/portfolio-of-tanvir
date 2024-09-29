import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Error from "../components/ErrorPage/Error";
import Project from "../components/Project/Project";
import Publication from "../components/Publication/Publication";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/project",
                element:<Project></Project>
            },
            {
                path:"/publication",
                element:<Publication></Publication>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
        ]
    }
])

export default router;