import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@store";
import { fetchUsers } from "@features/user/userSlice";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import UserDetailsPage from "@pages/UserDetailsPage";

const fetchUsersLoader = async (): Promise<null> => {
  const { users, isLoading } = store.getState().users;

  if (!isLoading && !users.length) {
    await store.dispatch(fetchUsers());
  }

  return null;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, loader: fetchUsersLoader },
      {
        path: "/user/:userId",
        element: <UserDetailsPage />,
        loader: fetchUsersLoader,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
