import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="container h-screen px-24 py-24 mx-auto">
      <div className="grid items-center grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width="460"
            height="502"
            alt="login image"
          />
        </div>
        <div className="p-12 border-4 shadow-2xl">
          <h1 className="mb-8 text-4xl font-bold text-center">Login</h1>
          {/* For Email */}
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="w-full my-3 input input-bordered"
          />

          {/* For Password */}
          <label className="font-bold" htmlFor="password">
            Confirm Your Password
          </label>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Your Password"
            className="w-full my-3 input input-bordered"
          />
          <button className="w-full px-8 btn btn-primary">Sign In</button>
          <div>
            <h6 className="mt-4 mb-2 text-center">or sign in with</h6>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center text-2xl text-blue-600 btn">
                <FaFacebook />
              </button>
              <button className="flex items-center justify-center text-2xl btn">
                <FcGoogle />
              </button>
              <button className="flex items-center justify-center text-2xl text-blue-700 btn">
                <FaLinkedin />
              </button>
            </div>
            <h6 className="mt-4 mb-2 text-center">Not have an account? <Link href="/signup" className="font-bold text-primary">Sign Up</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
