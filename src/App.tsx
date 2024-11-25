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

//@comment: better create it inside component where u need it. Because on this level
// u might have 10-20 pages but only 1-2 pages need this request.
// I mean if u create on this level a lot of dispatches it might be as chaos

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
        // loader: fetchUsersLoader,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

//+@comment: for React Components u can use React.FC. But for this case JSX is possible
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
