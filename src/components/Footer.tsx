import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 md:space-x-reverse">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold flex items-center">
            <FaMapMarkerAlt className="ml-2" />
            آدرس
          </h2>
          <p className="mt-2 text-gray-400">
            استان فارس، بزرگراه شیراز- فسا- بندرعباس
            <br />
            مجتمع گردشگری سرو
            <br />
            <Link href="https://neshan.org/maps/@29.281332,53.180668,15z,0p/places/56e8e9d3e7ba4cf5877884241c0aa622" target="_blank" className="text-blue-600 hover:underline">
              مشاهده در نقشه
            </Link>
          </p>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold flex items-center">
            <FaPhone className="ml-2" />
            شماره تلفن
          </h2>
          <p className="mt-2 text-gray-400">
            +98 936 001 1103
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
