"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-left flex-col flex-grow pt-10">
        <div className="p-5">
          <h1 className="text-left">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-6xl font-bold">W h i s t l e D A O</span>
            <span className="block text-3xl ">Ethical Transparency</span>
          </h1>
        </div>
      </div>

      <div className="flex-grow bg-base-300 w-full mt-16 px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Local Homeless hit with a liquor bottle to severe injuries!
            </h5>
            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              An Anonymous report recieved from a female individual that a homeless person was hit with a liquor bottle
              ruthlessely. The person is severely injured and is in need of medical attention. The accused is still at
              large and is none other than the Nagarsevak of the Area, Mr. Sanjay Rathod. Read more...
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2022
            </h5>
            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2023
            </h5>
            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>

      <div className="bg-local bg-no-repeat bg-right-top bg-cover bg-center ...">
        <h1 className="text-center pt-20x">
          <span className="block text-3xl font-bold">Reports in your vicinity:</span>
        </h1>
        <p className="font-normal text-left text-gray-700 dark:text-gray-400">
          Local Homeless hit with a liquor bottle to severe injuries! Noteworthy technology acquisitions 2021 Here are
          the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Noteworthy
          technology acquisitions 2021 Here are the biggest enterprise technology acquisitions of 2021 so far, in
          reverse chronological order.Noteworthy technology acquisitions 2021 Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.Noteworthy technology acquisitions 2021 Here are
          the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Noteworthy
          technology acquisitions 2021 Here are the biggest enterprise technology acquisitions of 2021 so far, in
          reverse chronological order.
        </p>
      </div>
    </>
  );
};

export default Home;
