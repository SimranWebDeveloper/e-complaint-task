import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./router/AppLayout";
import { My_complaints } from "./pages/my_complaints/My_complaints";
import { New_complaint } from "./pages/new_complaint/New_complaint";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
        { 
          path: '/',
          element: <My_complaints />
        }, 
        { 
          path: '/new_complaint',
          element: <New_complaint />
        }, 
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
