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


  pish_ghazaRef: MutableRefObject<HTMLDivElement | null>;
  seafoodRef: MutableRefObject<HTMLDivElement | null>;
  CustomـfoodRef: MutableRefObject<HTMLDivElement | null>;
  LunchـdinnerRef: MutableRefObject<HTMLDivElement | null>;
  sini_majlesiRef: MutableRefObject<HTMLDivElement | null>;
  day_foodRef: MutableRefObject<HTMLDivElement | null>;
  cofeeRef: MutableRefObject<HTMLDivElement | null>;




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
  persian_foodRef,
  pish_ghazaRef,
  seafoodRef,
  CustomـfoodRef,
  LunchـdinnerRef,
  sini_majlesiRef,
  day_foodRef,
  cofeeRef

  

}) => {
  return (
    <div className="min-h-[74px] w-full flex justify-center items-center overflow-x-auto px-4">
      <div className="flex whitespace-nowrap space-x-4 overflow-x-auto">
        <button
          onClick={() => navigationHandler(pizzaRef)}
          className="font-light text-[#FACE8D] px-4 py-2"
        >
          فست فود
        </button>

        <button
          onClick={() => navigationHandler(persian_foodRef)}
          className="font-light text-[#FACE8D] px-4 py-2"
        >
          رستوران
        </button>

        <button
          onClick={() => navigationHandler(cofeeRef)}
          className="font-light text-[#FACE8D] px-4 py-2"
        >
          کافه
        </button>

      </div>
    </div>
  );
};

export default Nav;
