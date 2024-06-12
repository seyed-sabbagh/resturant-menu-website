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
    <div className="min-h-[74px] w-full flex justify-center items-center">
      <button
        onClick={() => navigationHandler(pizzaRef)}
        className="font-light text-[#FACE8D]"
      >
        pizza
      </button>
      <button
        onClick={() => navigationHandler(friedRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        fried
      </button>
      <button
        onClick={() => navigationHandler(hot_dogRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        hot dog
      </button>
      <button
        onClick={() => navigationHandler(feedRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        feed
      </button>

      <button
        onClick={() => navigationHandler(burgersRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        burgers
      </button>

      <button
        onClick={() => navigationHandler(sandwichesRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        sandwiches
      </button>


      <button
        onClick={() => navigationHandler(snacksRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        snacks
      </button>

      <button
        onClick={() => navigationHandler(saladRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        salad
      </button>

      <button
        onClick={() => navigationHandler(persian_foodRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        persian_food
      </button>

    </div>
  );
};

export default Nav;
