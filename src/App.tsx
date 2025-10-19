import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  // useHref, useNavigate
} from "react-router-dom";
import { router } from "./router";

const queryClient = new QueryClient();

const App: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <RouterProvider router={router} />
          <ToastProvider placement="top-center" />
        </HeroUIProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
