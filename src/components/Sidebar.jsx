import React from "react";
import Button from "./Button";

function Sidebar({ isOpen, toggleSidebar, navigate }) {
  return (
    <aside
      className={`bg-blue-900 text-white min-h-screen p-4 w-[20%] transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
     
      <ul>
        <li>
          <Button
            onClick={() => navigate("/home")}
            className="w-full bg-red-500 mb-4"
          >
            الصفحة الرئيسية
          </Button>
        </li>
        <li>
          <Button
            onClick={() => navigate("/categories")}
            className="w-full bg-blue-800 mb-2"
          >
            الفئات
          </Button>
        </li>
        <li>
          <Button
            onClick={() => navigate("/products")}
            className="w-full bg-blue-800 mb-2"
          >
            المنتجات
          </Button>
        </li>
        <li>
          <Button
            onClick={() => navigate("/invoices")}
            className="w-full bg-blue-800"
          >
            الفواتير
          </Button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
