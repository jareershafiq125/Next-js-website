/* eslint-disable react/jsx-no-undef */

import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Link from "next/link";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Static from "@/components/Static";

import React from "react";
import Discount from "@/components/Discount";


export default function Home() {
  return (
    <>
      <>
        <>
          <>
            <>
              <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"></a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"bg-yellow-300  shadow-2x
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-2xl text-yellow-300">Furiro</span>
                  
                  <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-teal-400  w-32 text-center text-white bg-black"> Home</a>
                    <a className="mr-5 hover:text-teal-400 w-32 text-center text-white   bg-black "><Link href="/buyer"> Shop</Link>
                    </a>
                    <a className="mr-5 hover:text-teal-400 text-center text-white w-32 bg-black">
                      {" "}
                      <Link href="/profile">About us</Link>
                    </a>
                <a className="mr-5 hover:text-teal-400 w-32 text-center text-white bg-black 
                    "><Link href="/contact">Contact </Link>
                    </a>
                  </nav>
                  <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-teal-400 rounded text-base text-center text-white mt-4 md:mt-0">
                    Add to cart
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </header>
              <Slider />
              <Content />
              <Hero />
            </>

            <Contact />
          </>
          <Static />
          <Link href="/my-project/src/about/About.tsx"> go to about page</Link>
        </>
      </>
      <Discount/>

      <Footer />
     
    </>
  );
}
