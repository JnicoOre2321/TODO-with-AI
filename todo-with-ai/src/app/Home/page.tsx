"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const {value, isLoggedIn} = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      console.log(value);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col relative">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <span className="font-semibold text-sm">LOGO</span>
        <span>
          {/* User icon */}
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700">
            <circle cx="16" cy="12" r="6" />
            <path d="M4 28c0-4 8-6 12-6s12 2 12 6" />
          </svg>
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <img src="/woman.svg" alt="Woman with notes" className="w-full" />
        </div>

        {/* Todo List Card */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl font-handwriting mb-2">TODO LIST</h1>
          <div className="w-40 h-2 border-b-4 border-black rounded-full mb-6" />
          <div className="bg-gray-300 rounded-3xl p-8 w-full max-w-md flex flex-col gap-4">
            {/* Task Items */}
            <div className="bg-white rounded-lg flex items-center px-4 py-3">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <span className="text-sm">Tarea 1</span>
            </div>
            <div className="bg-white rounded-lg flex items-center px-4 py-3">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <span className="text-sm">Tarea 1</span>
            </div>
            <div className="bg-white rounded-lg flex items-center px-4 py-3">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3" />
              <span className="text-sm">Tarea 1</span>
            </div>
            {/* Empty slots */}
            <div className="bg-white rounded-lg px-4 py-3 min-h-[40px]" />
            <div className="bg-white rounded-lg px-4 py-3 min-h-[40px]" />
          </div>
        </div>

        {/* Floating Button in bottom-right */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute bottom-8 right-8 flex flex-col items-center">
            <span className="mb-2 text-sm">Try me</span>
            <svg width="32" height="32" fill="none" stroke="teal" strokeWidth="3" className="mb-2 animate-bounce">
              <path d="M16 4v20M16 24l-6-6M16 24l6-6" />
            </svg>
            <button className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-gray-400 transition">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}