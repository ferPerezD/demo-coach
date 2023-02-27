import { createBrowserRouter } from "react-router-dom";
import AnotherPage from "../pages/AnotherPage";
import Home from "../pages/Home";



export const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/AnotherPage', element: <AnotherPage />},
  ])