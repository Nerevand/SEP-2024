import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@store";
import { ROUTES } from "@constants";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import UserDetailsPage from "@pages/UserDetailsPage";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      {
        path: ROUTES.DETAILS,
        element: <UserDetailsPage />,
      },
      { path: ROUTES.ERROR, element: <ErrorPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
