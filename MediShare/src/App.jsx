import Navbar from "./components/navbar.jsx";
import Boxes from "./components/boxes.jsx";
import Filter from "./components/filteringComponent.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./components/page.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Filter />
        <Boxes />
      </div>
    ),
  },{
    path: "/other",
    element: (
      <div>
        <Page />
      </div>
    ),
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
