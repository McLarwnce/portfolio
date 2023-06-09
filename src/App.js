import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Resume from "./components/resume/Resume";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/home", element: <About /> },
      { path: "*", element: <About /> },
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/works", element: <Works /> },
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
