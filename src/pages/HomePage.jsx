import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { getCategories, getProducts, getInvoices } from "../api/resources";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  FiBox,
  FiTag,
  FiFileText,
  FiDollarSign,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

const STAT_CARDS = [
  {
    id: "categories",
    title: "الفئات الإجمالي",
    icon: <FiTag />,
    color: "text-blue-500",
  },
  {
    id: "products",
    title: "المنتجات الإجمالي",
    icon: <FiBox />,
    color: "text-green-500",
  },
  {
    id: "invoices",
    title: "الفواتير الإجمالي",
    icon: <FiFileText />,
    color: "text-yellow-500",
  },
  {
    id: "totalRevenue",
    title: "الإيرادات الإجمالي",
    icon: <FiDollarSign />,
    color: "text-purple-500",
  },
  {
    id: "todayRevenue",
    title: "الإيرادات اليوم",
    icon: <FiBarChart2 />,
    color: "text-red-500",
  },
  {
    id: "averageRevenue",
    title: "الإيرادات المتوسطة",
    icon: <FiTrendingUp />,
    color: "text-indigo-500",
  },
];

function HomePage() {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState({
    categories: 0,
    products: 0,
    invoices: 0,
    totalRevenue: 0,
    todayRevenue: 0,
    averageRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [categories, products, invoices] = await Promise.all([
          getCategories(),
          getProducts(),
          getInvoices(),
        ]);

        setStats({
          categories: categories.data.length,
          products: products.data.length,
          invoices: invoices.data.length,
          totalRevenue: invoices.data.reduce(
            (sum, invoice) => sum + invoice.total,
            0
          ),
          todayRevenue: 0,
          averageRevenue: 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const renderStatCard = (stat) => (
    <div
      key={stat.id}
      className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4"
    >
      <div className={`text-4xl ${stat.color}`}>{stat.icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">{stat.title}</h3>
        <p className="text-3xl font-bold text-gray-900">
          {stat.id.includes("Revenue") ? `$${stats[stat.id]}` : stats[stat.id]}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100" dir="rtl">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "mr-64" : "mr-0"
        }`}
      >
        <Navbar
          user={user}
          logout={logout}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAT_CARDS.map(renderStatCard)}
          </div>

          {/* Revenue Chart Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">الإيرادات (آخر 7 أيام)</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50">
              <p>Placeholder for Revenue Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
