import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  BookOpenCheck,
  CalendarPlus,
  PackagePlus,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50 w-full">
    
      <Sidebar />

      
      <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-red-700">Admin Dashboard</h1>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
          >
            <Home className="w-5 h-5" />
            Home
          </button>
        </div>

        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Bookings
                </p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  120.5
                </p>
              </div>
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <BookOpenCheck className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Upcoming Bookings
                </p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  210
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CalendarPlus className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  $39K
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <PackagePlus className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
