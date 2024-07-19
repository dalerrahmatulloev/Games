import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Games, Layout, Packman, Tictactoe } from "./routes/routes";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Games />
            </Suspense>
          ),
        },
        {
          path: "tictactoe",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Tictactoe />
            </Suspense>
          ),
        },
        {
          path: "packman",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Packman />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
