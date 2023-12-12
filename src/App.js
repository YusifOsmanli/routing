import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./router/ROUTES";
const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
