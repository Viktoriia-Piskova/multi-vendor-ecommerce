import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Categories = lazy(() => import("../../views/admin/Categories"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequests = lazy(() => import("../../views/admin/PaymentRequests"));
const DeactivateSellers = lazy(() => import("../../views/admin/DeactivateSellers"));
const SellersRequests = lazy(() => import("../../views/admin/SellersRequests"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Categories />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequests />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactivate-sellers",
    element: <DeactivateSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellersRequests />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
];
