import React, { FC, MutableRefObject } from "react";

//-------------------------------------------------------
interface IProps {
  pizzaRef: MutableRefObject<HTMLDivElement | null>;
  friedRef: MutableRefObject<HTMLDivElement | null>;
  hot_dogRef: MutableRefObject<HTMLDivElement | null>;
  feedRef: MutableRefObject<HTMLDivElement | null>;
  burgersRef: MutableRefObject<HTMLDivElement | null>;
  sandwichesRef: MutableRefObject<HTMLDivElement | null>;
  snacksRef: MutableRefObject<HTMLDivElement | null>;
  saladRef: MutableRefObject<HTMLDivElement | null>;
  persian_foodRef: MutableRefObject<HTMLDivElement | null>;
  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//-------------------------------------------------------

const Nav: FC<IProps> = ({
  navigationHandler,
  pizzaRef,
  friedRef,
  hot_dogRef,
  feedRef,
  burgersRef,
  sandwichesRef,
  snacksRef,
  saladRef,
  persian_foodRef
}) => {
  return (
    <div className="min-h-[74px] w-full flex justify-center items-center overflow-x-auto px-4">
      <div className="flex whitespace-nowrap space-x-4 overflow-x-auto">
        <button
          onClick={() => navigationHandler(pizzaRef)}
          className="font-light text-[#FACE8D] px-4 py-2"
        >
          پیتزا
        </button>
        <button
          onClick={() => navigationHandler(friedRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          سوخاری
        </button>
        <button
          onClick={() => navigationHandler(hot_dogRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          هات داگ
        </button>
        <button
          onClick={() => navigationHandler(feedRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          خوراک
        </button>
        <button
          onClick={() => navigationHandler(burgersRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          برگر
        </button>
        <button
          onClick={() => navigationHandler(sandwichesRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          ساندویچ
        </button>
        <button
          onClick={() => navigationHandler(snacksRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          اسنک
        </button>
        <button
          onClick={() => navigationHandler(saladRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          سالاد
        </button>
        <button
          onClick={() => navigationHandler(persian_foodRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          غذای ایرانی
        </button>
      </div>
    </div>
  );
};

export default Nav;
