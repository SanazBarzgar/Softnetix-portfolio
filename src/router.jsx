import { createBrowserRouter } from "react-router-dom";
import Gallery from './Gallery.jsx';
import Blog from './Blog.jsx';
import Login from './Login.jsx';
import App from "./App.jsx";


const router = createBrowserRouter(
    [
    {
        path:"/",
        element: <App />
    },
    {
        path: "blog",
        element:<Blog />
    },
    {
        path: "login",
        element:<Login />
    },
    {
        path: "gallery",
        element:<Gallery />
    },
        
]);

export default router