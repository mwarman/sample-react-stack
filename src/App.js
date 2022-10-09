import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StandardPage from "./components/pages/StandardPage";
import LandingPage from "./components/pages/LandingPage";
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
    element: <StandardPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
