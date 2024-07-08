import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./router/AppLayout";
import { Home } from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
        { 
          path: '/',
          element: <Home />
        },
        // {
        //   path: '/contact',
        //   element: <Contact />
        // },
        // {
        //   path: '/about',
        //   element: <About/>
        // }, 
      ]
    }
  ]);
  return (
    <div className="App">
 
      <RouterProvider router={router} />
    
  </div>
  );
}

export default App;
