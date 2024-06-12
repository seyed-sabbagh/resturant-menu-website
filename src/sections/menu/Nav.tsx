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
      <div className="flex whitespace-nowrap space-x-4">
        <button
          onClick={() => navigationHandler(pizzaRef)}
          className="font-light text-[#FACE8D] px-4 py-2"
        >
          pizza
        </button>
        <button
          onClick={() => navigationHandler(friedRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          fried
        </button>
        <button
          onClick={() => navigationHandler(hot_dogRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          hot dog
        </button>
        <button
          onClick={() => navigationHandler(feedRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          feed
        </button>
        <button
          onClick={() => navigationHandler(burgersRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          burgers
        </button>
        <button
          onClick={() => navigationHandler(sandwichesRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          sandwiches
        </button>
        <button
          onClick={() => navigationHandler(snacksRef)}
          className="font-light hover:text-[#FACE8D] text-white px-4 py-2"
        >
          snacks
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
          persian_food
        </button>
      </div>
    </div>
  );
};

export default Nav;
