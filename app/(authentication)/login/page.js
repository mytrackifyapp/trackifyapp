"use client";
import Link from "next/link";
import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { cookieTokenName } from "@/components/constant/urls";

const LoginPage = () => {
  const router = useRouter();
  const isValidToken = Cookies.get(cookieTokenName);
  if (isValidToken) {
    router.push("/v1");
  }
  return (
    <main className="m-auto flex h-[100vh] w-full flex-col items-center justify-center pl-2 pr-2 bg-white sm:max-w-[380px]  selection:bg-slate-700/60 selection:text-white  relative">
      <Link
        href="/"
        className="w-fit flex flex-col items-center justify-center text-5xl group"
      >
        <span className="rounded-full bg-[#09090a] text-white group-hover:rotate-12 p-1 transition-all ease-in duration-200">
        <img
    src="/trackifylogo.jpg" 
    alt="Trackify Logo"
    className="w-14 h-14 rounded-full shadow-lg group-hover:rotate-12 group-hover:bg-black/90 transition-all ease-in duration-200"
  />
        </span>
        <span className="mt-2 font-black text-4xl text-[#09090a]">
        Trackify
        </span>
      </Link>
      <p className="mb-6 mt-3 text-center text-sm font-medium text-zinc-600 ">
        Log in to Trackify to streamline your expense tracking and elevate your
        financial management.
      </p>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
