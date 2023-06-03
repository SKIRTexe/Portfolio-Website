import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Main/App";
import HomeAutomation from "./HomeAutomation";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }, 
    {
        path:"/HomeControl",
        element:<HomeAutomation/>
    }
]);

function Router(){
    return <RouterProvider router={router}/>
};
export default Router;