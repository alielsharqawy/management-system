import React, { useState } from "react";
import { FiMenu, FiChevronDown, FiLogOut } from "react-icons/fi";

function Navbar({ user, logout, toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-900 shadow-lg text-white p-4 flex justify-between items-center  pl-20">
      <button
        onClick={toggleSidebar}
        className="text-white text-2xl focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <FiMenu size={30} />
      </button>
      <h1 className="text-xl font-bold">نظام إدارة المخازن</h1>
      <div className="relative">
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-lg">{user?.name}</span>
          <FiChevronDown size={30} />
        </button>
        {menuOpen && (
          <div className="absolute left-2 mt-2 bg-white text-black shadow-lg rounded">
            <p className="p-6 border-b text-xl font-bold">{user?.email}</p>
            <button
              onClick={logout}
              className="w-full text-left text-xl font-bold p-6 text-red-500 hover:bg-gray-100 flex items-center justify-between"
            >
              تسجيل الخروج
               <FiLogOut size={30} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
