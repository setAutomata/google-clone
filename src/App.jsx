import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeContext from "./context/ThemeContext";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import Search from "./components/search/Search";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <Error /> },
    ],
  },
  { path: "/doodles", element: <h1>doodles page</h1> },
  { path: "/signin", element: <h1>signin page</h1> },
]);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;
