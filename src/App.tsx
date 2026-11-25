import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/pages/HomePage/Home.tsx";
import SessionsPage from "./components/pages/SessionsPage/SessionsPage.tsx";
import SessionPage from "./components/pages/SessionsPage/components/Session.tsx";
import Root from "./components/pages/Root/Root.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
