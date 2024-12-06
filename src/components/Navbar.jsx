import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ user, logout, toggleSidebar }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center relative">
      {/* زر القائمة الجانبية */}
      <button
        onClick={toggleSidebar}
        className="text-white material-icons cursor-pointer focus:outline-none"
      >
        menu
      </button>

      {/* عنوان النظام */}
      <h1 className="text-xl font-bold">نظام إدارة المخازن</h1>

      {/* القائمة المنسدلة */}
      <div className="relative">
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{user?.name}</span>
          <span className="material-icons">▼</span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
            <p className="p-4 border-b text-sm">{user?.email}</p>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="w-full text-left p-4 text-red-500 hover:bg-gray-100 flex items-center gap-2"
            >
              <span className="material-icons">logout</span> تسجيل الخروج
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
