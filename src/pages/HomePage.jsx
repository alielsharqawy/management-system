import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getCategories, getProducts, getInvoices } from "../api/resources";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
          todayRevenue: 0, // Placeholder for today's revenue
          averageRevenue: 0, // Placeholder for average revenue
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {sidebarOpen && (
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          navigate={navigate}
        />
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar user={user} logout={logout} />

        <div className="p-6 bg-gray-100">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Same Stats Cards as Before */}
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-blue-500">
                الفئات الإجمالي
              </h2>
              <p className="text-3xl">{stats.categories}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-green-500">
                المنتجات الإجمالي
              </h2>
              <p className="text-3xl">{stats.products}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-yellow-500">
                الفواتير الإجمالي
              </h2>
              <p className="text-3xl">{stats.invoices}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-purple-500">
                الإيرادات الإجمالي
              </h2>
              <p className="text-3xl">${stats.totalRevenue}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-red-500">
                الإيرادات اليوم
              </h2>
              <p className="text-3xl">${stats.todayRevenue}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-indigo-500">
                الإيرادات المتوسطة
              </h2>
              <p className="text-3xl">${stats.averageRevenue}</p>
            </div>
          </div>

          {/* Placeholder for Revenue Chart */}
          <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">الإيرادات (آخر 7 أيام)</h2>
            <div className="h-48 flex items-center justify-center">
              <p>Placeholder for Revenue Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
