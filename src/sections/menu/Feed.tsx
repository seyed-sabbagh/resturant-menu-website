import React, { FC, MutableRefObject } from "react";
import menuData from "/root/menu-manager-2/src/data/menuData.ts";
import Image from "next/image";
import Footer from "@/components/Footer";

import "./feed.css";
import Script from "next/script";

//---------------------------------------------
interface IProps {
  pizza: MutableRefObject<HTMLDivElement | null>;
  fried: MutableRefObject<HTMLDivElement | null>;
  hot_dog: MutableRefObject<HTMLDivElement | null>;
  feed: MutableRefObject<HTMLDivElement | null>;
  burgers: MutableRefObject<HTMLDivElement | null>;
  sandwiches: MutableRefObject<HTMLDivElement | null>;
  snacks: MutableRefObject<HTMLDivElement | null>;
  salad: MutableRefObject<HTMLDivElement | null>;
  persian_food: MutableRefObject<HTMLDivElement | null>;
  pish_ghaza: MutableRefObject<HTMLDivElement | null>;
  seafood: MutableRefObject<HTMLDivElement | null>;
  Customـfood: MutableRefObject<HTMLDivElement | null>;
  Lunchـdinner: MutableRefObject<HTMLDivElement | null>;
  sini_majlesi: MutableRefObject<HTMLDivElement | null>;
  day_food: MutableRefObject<HTMLDivElement | null>;


  //cofee
  cofee: MutableRefObject<HTMLDivElement | null>;
  icecream: MutableRefObject<HTMLDivElement | null>;
  koktel: MutableRefObject<HTMLDivElement | null>;
  damnosh: MutableRefObject<HTMLDivElement | null>;
  shake: MutableRefObject<HTMLDivElement | null>;
  smothi: MutableRefObject<HTMLDivElement | null>;
  majon: MutableRefObject<HTMLDivElement | null>;
  cold_bar: MutableRefObject<HTMLDivElement | null>;
  glasse: MutableRefObject<HTMLDivElement | null>;
  hot_bar: MutableRefObject<HTMLDivElement | null>;
  cake: MutableRefObject<HTMLDivElement | null>;

}
//---------------------------------------------

const Feed: FC<IProps> = ({
  pizza,
  fried,
  hot_dog,
  feed,
  burgers,
  sandwiches,
  snacks,
  salad,
  persian_food,
  pish_ghaza,
  seafood,
  Customـfood,
  Lunchـdinner,
  sini_majlesi,
  day_food,

  //cofee 

  cofee,
  icecream,
  koktel,
  damnosh,
  shake,
  smothi,
  majon,
  cold_bar,
  glasse,
  hot_bar,
  cake
}) => {

  const formatPrice = (price: number): string => {
    // Check if the price is negative
    if (price < 0) {
      // Use the absolute value of the price for formatting
      const formattedPrice = Math.abs(price).toLocaleString("fa", { useGrouping: true });
      // Return the formatted price with a minus sign
      return '-' + formattedPrice;
    } else {
      // Use the regular formatting for positive numbers
      return price.toLocaleString("fa", { useGrouping: true });
    }
  };
  return (
    

    <div className="mt-[0px] max-w-[628px] w-full overflow-hidden overflow-y-scroll farsi-font" > {/* Apply farsi-font class */}
      <div ref={pizza} className="w-full px-[10px] mt-[26px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="pizza">
        پیتزا
        </h1>
        <div className="item-container">
        {menuData.pizza.map((item) => (
          <div
            style={{
              border: item.id === 3 ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={fried} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="fried">
        سوخاری
        </h1>
        <div className="item-container">
        {menuData.fried.map((item) => (
          <div
            style={{
              border: item.id === 2 ? `1px solid #FACE8D` : "1px solid transparent",
              borderRadius: 10,
            }}
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={hot_dog} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="hot_dog">
        هات داگ
        </h1>
        <div className="item-container">
        {menuData.hot_dog.map((item) => (
          <div
            style={{
              border: item.id === 4 ? `1px solid #FACE8D` : "1px solid transparent",
              borderRadius: 10,
            }}
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"


          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={feed} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="feed">
        خوراک
        </h1>
        <div className="item-container">
        {menuData.feed.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={burgers} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="burgers">
        برگر
        </h1>
        <div className="item-container">
        {menuData.burgers.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={sandwiches} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sandwiches">
        ساندویچ
        </h1>
        <div className="item-container">
        {menuData.sandwiches.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  
      <div ref={snacks} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="snacks">
        اسنک
        </h1>
        <div className="item-container">
        {menuData.snacks.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={salad} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="salad">
        سالاد
        </h1>
        <div className="item-container">
        {menuData.salad.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  
      <div ref={persian_food} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="persian_food">
        غذای ایرانی
        </h1>

        <div className="item-container">

        
        {menuData.persian_food.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={pish_ghaza} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="pish_ghaza">
        پیش غذا
        </h1>

        <div className="item-container">

        
        {menuData.pish_ghaza.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  

      <div ref={seafood} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="seafood">
        غذای دریایی
        </h1>

        <div className="item-container">

        
        {menuData.seafood.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  

      <div ref={Customـfood} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="Customـfood">
        غذا های سفارشی
        </h1>

        <div className="item-container">

        
        {menuData.Customـfood.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  

      <div ref={Lunchـdinner} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="Lunchـdinner">
        غذای ظهر و شب
        </h1>

        <div className="item-container">

        
        {menuData.Lunchـdinner.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  

      <div ref={sini_majlesi} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        سینی مجلسی
        </h1>

        <div className="item-container">

        
        {menuData.sini_majlesi.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div ref={day_food} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        غذای روز
        </h1>

        <div className="item-container">

        
        {menuData.day_food.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={cofee} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="cofee">
        قهوه
        </h1>

        <div className="item-container">

        
        {menuData.cofee.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  


      <div ref={icecream} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        بستنی
        </h1>

        <div className="item-container">

        
        {menuData.icecream.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  


      <div ref={koktel} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        ککتل
        </h1>

        <div className="item-container">

        
        {menuData.koktel.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  


      <div ref={damnosh} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        دمنوش
        </h1>

        <div className="item-container">

        
        {menuData.damnosh.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  

      <div ref={shake} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        شیک
        </h1>

        <div className="item-container">

        
        {menuData.shake.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>



      <div ref={smothi} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        اسموتی
        </h1>

        <div className="item-container">

        
        {menuData.smothi.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

  

      <div ref={majon} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        معجون
        </h1>

        <div className="item-container">

        
        {menuData.majon.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={cold_bar} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        بار سرد
        </h1>

        <div className="item-container">

        
        {menuData.cold_bar.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={glasse} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        گلاسه
        </h1>

        <div className="item-container">

        
        {menuData.glasse.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={hot_bar} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        بار گرم
        </h1>

        <div className="item-container">

        
        {menuData.hot_bar.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("/root/menu-manager-2/src/backend/uploads/" + item.pictureUrl)}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>


      <div ref={cake} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]" style={{ direction: 'rtl', fontFamily: 'B Vazir, Tahoma, Arial, sans-serif' }} id="sini_majlesi">
        کیک
        </h1>

        <div className="item-container">

        
        {menuData.cake.map((item) => (
          <div
            key={item.id}
            className="item mt-[12px] cursor-pointer hover:scale-95 duration-150"

          >
            <Image
              width={90}
              height={72}
              src={require("src/assets/sliderimg2.jpg").default}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{formatPrice(Number(item.price))}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feed;
