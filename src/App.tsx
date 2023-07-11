import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Test from './components/test';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Test />,
    }
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
