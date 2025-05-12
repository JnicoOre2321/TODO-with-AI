"use client";
import { useRouter } from "next/navigation";
import React from "react";
import TituloDinamico from "@/components/fuenteDinamica";
import { login } from "@/actions/login";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from "@/app/redux/slices/userSlice";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const data = await login(email, password);
    setLoading(false);
    if (data == 200) {
      setSuccess(true);
      const sendAction = {
        type: "SET_USER",
        payload: data,
      }
      dispatch(setuser(sendAction));
      setTimeout(() => {
        router.push("/Home");
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* Lado Izquierdo */}
      <div className="flex flex-col justify-center items-end flex-1 pr-16">
        <div className="flex flex-col items-center">
          <TituloDinamico titulo="TODO with AI" />
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 w-80"
          >
            <label className="block mb-4">
              <span className="block text-gray-700 mb-1">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="block text-gray-700 mb-1">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition mb-2 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : success ? (
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : error ? (
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                "Log in"
              )}
            </button>
            <a
              href="#"
              className="text-blue-600 underline text-sm hover:text-blue-800"
            >
              Forgot password?
            </a>
          </form>
        </div>
      </div>
      {/* Lado Derecho */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/login.svg"
          alt="Login Illustration"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
}
