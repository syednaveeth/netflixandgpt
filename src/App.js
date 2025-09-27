import { Provider } from "react-redux";
import "./App.css";
import { appstore } from "./Utils/appstore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Browser from "./Components/Browser";

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
