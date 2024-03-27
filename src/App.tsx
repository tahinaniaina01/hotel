import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headers from "./components/Header";
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
      <Headers />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
