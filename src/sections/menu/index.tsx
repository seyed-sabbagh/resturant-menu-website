import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC, MutableRefObject, useRef, useState } from "react";
import Nav from "./Nav";
import menuImg from "../../../src/app/back.webp";
import Feed from "./Feed";



const MenuSection: FC = () => {
  const pizzaRef = useRef<HTMLDivElement | null>(null);
  const friedRef = useRef<HTMLDivElement | null>(null);
  const hot_dogRef = useRef<HTMLDivElement | null>(null);
  const feedRef = useRef<HTMLDivElement | null>(null);
  const burgersRef = useRef<HTMLDivElement | null>(null);
  const sandwichesRef = useRef<HTMLDivElement | null>(null);
  const snacksRef = useRef<HTMLDivElement | null>(null);
  const saladRef = useRef<HTMLDivElement | null>(null);
  const persian_foodRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionId: MutableRefObject<HTMLDivElement | null>) {
    if (sectionId?.current) {
      sectionId?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
  <div
    style={{
      background: `url(${menuImg.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-[80vh] md:min-h-screen h-full">
    <img src={`url(${menuImg.src})`}/>

    <div className="text-center">
    
      <h2 className="text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none">
        Check Out
      </h2>
      <h1 className="font-medium text-[50px] md:text-[80px] leading-none">
        Our Menus
      </h1>
    </div>
  </div>

  <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
    <Nav
      pizzaRef={pizzaRef}
      friedRef={friedRef}
      hot_dogRef={hot_dogRef}
      feedRef={feedRef}
      burgersRef={burgersRef}
      sandwichesRef={sandwichesRef}
      snacksRef={snacksRef}
      saladRef={saladRef}
      persian_foodRef={persian_foodRef}
      navigationHandler={scrollToSection}
    />
    <Feed
      pizza={pizzaRef}
      fried={friedRef}
      hot_dog={hot_dogRef}
      feed={feedRef}
      burgers={burgersRef}
      sandwiches={sandwichesRef}
      snacks={snacksRef}
      salad={saladRef}
      persian_food={persian_foodRef}
    />
  </div>
</section>

  );
};

export default MenuSection;
