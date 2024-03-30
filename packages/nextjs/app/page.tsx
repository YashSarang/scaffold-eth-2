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
<<<<<<< Updated upstream
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
=======
      <div className="scaffold-container">
        <div className="bg-local scaffold-background" />
        <div className="scaffold-content flex flex-col items-left">
          <div className="scaffold-header text-left">
            <h2 className="text-2xl mb-2">Welcome to</h2>
            <h1 className="text-6xl font-bold mb-2">W h i s t l e D A O</h1>
            <h3>
              <span className="text-3xl font-bold mb-2">Ethical Transparency</span>
            </h3>
            <div className="flex justify-center items-center space-x-2" />
>>>>>>> Stashed changes
          </div>
          <div className="scaffold-image absolute top-20 right-0">
            <img
              src="https://i.dawn.com/primary/2020/07/5f1e461daeaa2.jpg"
              alt="Your Image"
              className="h-256 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="scaffold-container">
        {/* ... rest of your container structure ... */}

        <div className="scaffold-cards flex-col gap-4">
          <div className="scaffold-card">
            {/* Card content goes here */}
          </div>
          <div className="scaffold-card">
            {/* Card content goes here */}
          </div>
          <div className="scaffold-card">
            {/* Card content goes here */}
          </div>
        </div>
      </div>

      {/* Media queries for responsive adjustments */}
      <style jsx global>{`
        /* Base styles for all screen sizes */
        .scaffold-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .scaffold-background {
          width: 100%;
          height: 100%;
          background-size: cover;
          opacity: 50;
          background-position: center;
          background-repeat: no-repeat;
          
        }

        .scaffold-content {
          flex: 1;
          padding: 4rem;
          gap: 2rem;
        }

        .scaffold-header {
          max-width: 700px;
        }

        .scaffold-image {
          width: 30%;
          max-width: 400px;
        }

        /* Adjustments for smaller screens */
        @media (max-width: 768px) {
          .scaffold-content {
            padding: 2rem;
          }

          .scaffold-header {
            max-width: 500px;
          }

          .scaffold-image {
            width: 50%;
          }
        }

        /* Adjustments for extra-small screens */
        @media (max-width: 480px) {
          .scaffold-image {
            width: 100%;
          }
        }

        
      `}</style>
    </>
  );
};

export default Home;
