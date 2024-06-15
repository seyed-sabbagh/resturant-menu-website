import React, { FC, MutableRefObject } from "react";
import menuData from "/root/menu-manager-2/src/data/menuData";
import Image from "next/image";
import Footer from "@/components/Footer";

import "./feed.css";

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
  persian_food
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

    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll farsi-font"> {/* Apply farsi-font class */}
      <div ref={pizza} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        pizza
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        fried
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        hot dog
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        feed
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        burgers
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        sandwiches
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        snacks
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        salad
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
              src={item.pictureUrl}
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
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
        persian_food
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
              src={item.pictureUrl}
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
