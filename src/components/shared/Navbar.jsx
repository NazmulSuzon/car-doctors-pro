"use client";
import { useSession } from "next-auth/react";
import { signOut} from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const session = useSession();
  console.log(session);

  return (
    <div
      style={{ position: "sticky", top: "0", zIndex: "100" }}
      className="bg-base-100 text-slate-900"
    >
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <img alt="logo" src="/assets/logo.svg" height={60} width={60} />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <div className="flex items-center space-x-6 font-semibold">
            {navItems?.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.path}
                className="hover:text-primary"
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* <span className="badge badge-sm indicator-item">0</span> */}
            </div>
          </div>

          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="px-8 mx-2 btn btn-outline btn-primary">
            Appointment
          </button>
          {!session.data ? 
            <button type="submit" className="px-8 btn btn-primary">
              <Link href="/login">Log In</Link>
            </button>
           : 
            <button className="px-8 btn btn-primary" onClick={() => signOut()}>
              Log Out
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
