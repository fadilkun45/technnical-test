import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import MainLayout from "./components/layout/layout";
import SupplierList from "./pages/supplierList/supplierList";
import ComingSoon from "./pages/comming-soon/commingSoon";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout><Dashboard /></MainLayout>,
    },
      {
      path: "/supplier-list",
      element: <MainLayout><SupplierList /></MainLayout>,
    },
      {
      path: "*",
      element: <MainLayout><ComingSoon /></MainLayout>,
    },
  ])



  return (
    <RouterProvider router={router} />
  );
}

export default App;
