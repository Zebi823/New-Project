import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ReceiptText,
  UsersRound,
  UserSearch,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const [selectedVenueId, setSelectedVenueId] = useState(
    localStorage.getItem("venueId") || ""
  );

  const handleVenueSelection = (venueId) => {
    localStorage.setItem("venueId", venueId);
    setSelectedVenueId(venueId);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear login/session data
    navigate("/login"); // Redirect to login page
  };

  const menuItems = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      path: "/admin/products",
      label: "Product List",
      icon: <ReceiptText size={20} />,
    },
    {
      path: "/admin/products/add",
      label: "Add Product",
      icon: <UsersRound size={20} />,
    },
    {
      path: "/admin/products/edit/:id",
      label: "Edit Product",
      icon: <UserSearch size={20} />,
    },
  ];

  const isActive = (path) => window.location.pathname.startsWith(path);

  return (
    <div
      className={`
        top-0 left-0 z-50 h-screen w-60
        flex flex-col bg-white shadow-lg
        transition-all duration-300 ease-in-out
      `}
    >
      
      <div className="px-4 py-5 border-b border-gray-100 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2">
            <UsersRound size={28} />
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold text-base">
              Zeba Ansari
            </h4>
            <span className="text-gray-500 text-xs block">
              zebaansari32@gmail.com
            </span>
          </div>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className={`
              flex items-center
              mx-3 my-1 px-3 py-2 rounded-lg
              cursor-pointer
              transition-all duration-200
              ${
                isActive(item.path)
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }
            `}
            onClick={() => navigate(item.path)}
          >
            <div className="mr-3">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className=" flex items-center justify-center gap-2 text-red-600 hover:bg-gray-100 transition px-4 py-2 rounded-md"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
