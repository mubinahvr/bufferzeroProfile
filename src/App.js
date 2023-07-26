import "./index.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/AuthLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
      ]
    },
    {
      path: '/Home',
      element: <Home />,
     
    },
   
  ])
  return (
    <RouterProvider router={route} />
  );
}

export default App;
