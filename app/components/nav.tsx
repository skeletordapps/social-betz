"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import { routes } from "@/consts";
import Link from "next/link";
import { StateContext } from "../context/StateContext";
import { Transition } from "@headlessui/react";
import { title } from "process";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export default function Nav() {
  const { page, setPage } = useContext(StateContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* DESKTOP */}
      <main className="hidden lg:flex w-full max-w-[1920px] bg-black">
        <div
          className={`flex items-center justify-between w-full py-[35px] md:px-[20px] xl:px-[100px] border-b border-purple-betz/40 ${roboto.className}`}
        >
          <div className="min-w-[168px] max-w-[168px]">
            <Link href="/" className="hover:opacity-75">
              <Image
                src="/socialbetz-v1-dark.svg"
                width={168}
                height={163}
                placeholder="blur"
                blurDataURL="/socialbetz-v1-dark.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="text-white flex items-center md:gap-6 xl:gap-10 font-light md:text-[16px] xl:text-[20px]">
              {routes.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`transition-all hover:border-b-[5px] pb-1 ${
                    item.href === page.href &&
                    item.title !== routes[4].title &&
                    "border-b-[5px]"
                  } ${
                    item.title !== routes[4].title
                      ? "border-purple-betz"
                      : "border-orange-400"
                  } ${item.title === routes[4].title && "text-orange-400"} `}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <button
            className={`transition-all bg-purple-betz w-[168px] h-[39px] flex justify-center items-center rounded-lg text-white text-[16px] font-medium hover:scale-[1.02] ${roboto.className}`}
          >
            Connect Wallet
          </button>
        </div>
      </main>
      {/* MOBILE */}
      <main className="flex flex-col lg:hidden w-full bg-nav bg-no-repeat bg-cover relative z-20">
        <div
          className={`flex items-center justify-between w-full pt-[25px] px-[20px] ${roboto.className}`}
        >
          <div className="min-w-[138px] max-w-[138px] sm:min-w-[168px] sm:max-w-[168px]">
            <Link href="/" className="hover:opacity-75">
              <Image
                src="/socialbetz-v1-dark-logo.svg"
                width={38}
                height={23}
                placeholder="blur"
                blurDataURL="/socialbetz-v1-dark.svg"
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex gap-2 sm:gap-4 items-center">
            <button
              className={`bg-purple-betz transition-all w-[100px] sm:w-[120px] h-[33px] flex justify-center items-center rounded-lg text-white text-[12px] sm:text-[14px] font-medium hover:scale-[1.02] ${roboto.className}`}
            >
              Connect Wallet
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="transition-all w-[39px] h-[33px] text-purple-betz p-1 px-2  rounded-lg hover:scale-[1.02]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Transition
          show={open}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          // onMouseLeave={() => setOpen(false)}
        >
          <div className="px-[20px]">
            <div className="flex flex-col w-full self-center pt-5 gap-1">
              {routes.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`
                    transition-all font-light text-[16px] bg-purple-betz p-4 bg-opacity-90 hover:bg-opacity-60 hover:text-white hover:border-l-[6px] hover:border-white border-purple-betz rounded-lg shadow-md 
                    ${
                      item.title === "Juggernauts"
                        ? "text-orange-400"
                        : "text-white"
                    }
                    ${
                      item.href === page.href &&
                      item.href !== routes[4].href &&
                      "border-l-[6px] hover:text-white hover:border-white"
                    }
                    ${
                      item.href === page.href &&
                      item.href === routes[4].href &&
                      "border-l-[6px] hover:text-orange-400 hover:border-orange-400"
                    }
                  `}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Transition>

        <div className="border-b border-purple-betz/40 pt-5 border-green-fss" />
      </main>
    </>
  );
}
