import { Provider } from "react-redux";
import "./App.css";
import { appstore } from "./Utils/appstore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Browser from "./Components/Browser";

import "line-awesome/dist/line-awesome/css/line-awesome.css";
function App() {
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },

    { path: "/browse", element: <Browser /> },
  ]);

  return (
    <div>
      <Provider store={appstore}>
        <RouterProvider router={approuter} />
      </Provider>
    </div>
  );
}

export default App;
