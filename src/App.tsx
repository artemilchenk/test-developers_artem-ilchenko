import "./App.css";
import "./assets/css/fonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
