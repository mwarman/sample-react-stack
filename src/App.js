import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastContextProvider } from "./contexts/toast.context";
import StandardLayout from "./components/layouts/StandardLayout";
import LandingPage from "./components/pages/LandingPage";
import TodoCreatePage from "./components/pages/TodoCreatePage";
import TodoEditPage from "./components/pages/TodoEditPage";
import TodoListPage from "./components/pages/TodoListPage";
import TodosPage from "./components/pages/TodosPage";
import Todo from "./components/todos/Todo";
import ErrorPage from "./components/pages/ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/todos/create",
        element: <TodoCreatePage />,
      },
      {
        path: "/todos/:todoId/edit",
        element: <TodoEditPage />,
      },
      {
        path: "/todos/list",
        element: <TodoListPage />,
      },
      {
        path: "/todos",
        element: <TodosPage />,
        children: [
          {
            path: ":todoId",
            element: <Todo />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContextProvider>
        <RouterProvider router={router} />
      </ToastContextProvider>
    </QueryClientProvider>
  );
};

export default App;
