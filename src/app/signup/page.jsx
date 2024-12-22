"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SignupPage = () => {
  const handleSignup = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if(resp.status === 200){
      event.target.reset();
    }
  };
  return (
    <div className="container px-24 py-24 mx-auto">
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
          <h1 className="mb-8 text-4xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignup} action="">
            <label className="font-bold" htmlFor="email">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full my-3 input input-bordered"
            />
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
            <button type="submit" className="w-full px-8 btn btn-primary">
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="mt-4 mb-2 text-center">or sign up with</h6>
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
            <h6 className="mt-4 mb-2 text-center">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-primary">
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
