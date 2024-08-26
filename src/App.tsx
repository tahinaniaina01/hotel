import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomsDetails from "./pages/RoomsDetails";

const router = createBrowserRouter([
  {
    path: "/hotel/",
    element: <Home />,
  },
  {
    path: "/hotel/rooms/:room",
    element: <RoomsDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
