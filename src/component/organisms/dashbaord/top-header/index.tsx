import { dashboardLinks } from "@/constants/links/inedx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
export const TopHeader = () => {
  const usePathName = usePathname();
  const currentLink = dashboardLinks.find((item) => item.href === usePathName);

  return (
    <section className=" bg-white border-b pr-4">
      <nav className="relative">
        <div className="flex items-center">
          <div className="flex items-center mr-auto p-4">
            <Link
              className="flex items-center text-sm hover:text-gray-800"
              href="#"
            >
              <span className="inline-block mr-2">
                <IoHomeOutline className="text-[#d7a888]" size={17} />
              </span>
              <span>Home</span>
            </Link>
            <span className="inline-block mx-3">
              <MdKeyboardArrowRight className="text-[#d7a888]" size={17} />
            </span>
            <Link
              className="flex items-center text-sm hover:text-gray-800"
              href="#"
            >
              <span className="inline-block mr-2">
                <AiOutlineProduct className="text-[#d7a888]" size={17} />
              </span>
              <span>{currentLink?.name}</span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center space-x-6 mr-6">
            <li>
              <a className="text-gray-200 hover:text-gray-300" href="#">
                <IoSearchOutline className="text-[#d7a888]" size={22} />
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-gray-300" href="#">
                <BiMessageRounded className="text-[#d7a888]" size={22} />
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-gray-300" href="#">
                <IoIosNotificationsOutline
                  className="text-[#d7a888]"
                  size={24}
                />
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="flex items-center">
              <div className="mr-3">
                <p className="text-sm text-[#d7a888]">Thomas Brown</p>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
              <div className="mr-2">
                <img
                  className="w-10 h-10 rounded-full object-cover object-right"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
              <span>
                <svg
                  className="text-gray-400"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};
