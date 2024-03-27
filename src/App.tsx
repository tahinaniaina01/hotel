import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RoomsDetails from "./pages/RoomsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:room",
    element: <RoomsDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
