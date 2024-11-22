import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaCodePullRequest, FaUsers } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiSolidCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactivate Sellers",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/deactivate-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/seller-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
  {
    id: 21,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 22,
    title: "Add Product",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 23,
    title: "All Products",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/all-products",
  },
  {
    id: 24,
    title: "Discount Products",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/discount-products",
  },
  {
    id: 25,
    title: "Orders",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 26,
    title: "Payments",
    icon: <MdPayment />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 27,
    title: "Chat Customer",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 28,
    title: "Chat Support",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 29,
    title: "Profile",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
