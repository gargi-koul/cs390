import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {Index} from "./pages";
import {Create} from "./pages/create";
import {View} from "./pages/view";
import {Login} from "./pages/login";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/view",
    element: <View />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
