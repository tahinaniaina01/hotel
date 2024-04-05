import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RoomsDetails from "./pages/RoomsDetails";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
