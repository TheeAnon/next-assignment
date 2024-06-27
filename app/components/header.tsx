import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between text-[#FAFAFA] items-center">
      <div className="h-full w-auto">
        <Image
          src="/BlockChain.png"
          alt="Block Chain Logo"
          width={193}
          height={25}
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="flex gap-2 whitespace-nowrap">
        <a
          href="/somepage"
          className="font-normal text-sm md:font-medium py-7 px-5"
        >
          Exchange
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm md:font-medium py-7 px-5"
        >
          Last Transactions
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm md:font-medium py-7 px-5"
        >
          Invite Friend
        </a>
        <a
          href="/somepage"
          className="font-normal text-sm md:ont-medium py-7 px-5"
        >
          Notifications
        </a>
      </div>
      <div className="flex gap-2">
        <a
          href="/login"
          className="border border-[#9945FF] rounded-tl-lg rounded-br-lg font-medium p-3"
        >
          LOG IN
        </a>
        <a
          href="/signup"
          className="bg-[#9945FF] rounded-tl-lg rounded-br-lg font-medium p-3"
        >
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Header;
