import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between px-[10px] mt-[96px] mb-[80px]">
      <div className="w-full max-w-[162px]">
        <Link href="/" className="font-semibold cursor-pointer">
          Resturant name
        </Link>
        <p className="mt-[32px] text-white text-opacity-50">
          Created by fapna,{" "}
          <Link
            href="https://fapna-co.ir/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Website
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
