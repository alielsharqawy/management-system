import React from "react";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="mt-20 space-y-4 px-4">
        <li className="cursor-pointer p-4 hover:bg-blue-800 rounded-lg font-bold text-2xl">
          الصفحة الرئيسية
        </li>
        <li className="cursor-pointer p-4 hover:bg-blue-800 rounded-lg font-bold text-xl">
          الفئات
        </li>
        <li className="cursor-pointer p-4 hover:bg-blue-800 rounded-lg font-bold text-xl">
          المنتجات
        </li>
        <li className="cursor-pointer p-4 hover:bg-blue-800 rounded-lg font-bold text-xl">
          الفواتير
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
