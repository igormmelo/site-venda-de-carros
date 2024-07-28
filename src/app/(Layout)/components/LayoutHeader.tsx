"use client";
import { CircleUser, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AccordionDemo } from "../../../components/menu/menuList";
import { NavigationMenuDemo } from "../../../components/menu/NavigationList";
const MenuContent = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-white md:hidden">
      <div className="h-24 bg-white w-full flex justify-between px-6 border-b-2 shadow-md">
        <button className="flex items-center">
          <CircleUser size={25} />
          <p className="text-xl font-medium ml-1">Entrar</p>
        </button>
        <button>
          <X />
        </button>
      </div>
      <div className="w-full h-16 flex items-center justify-center">
        <h1 className="text-xl font-medium">Menu</h1>
      </div>
      <div>
        <AccordionDemo />
      </div>
    </div>
  );
};

const LayoutHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed left-0 right-0 z-10">
      <div className="w-full bg-white h-16 border-solid border-b-2 items-center flex justify-between px-10 shadow-md">
        <Image
          src={"/logo.png"}
          alt="'logo zenith motors"
          width={145}
          height={28}
        />
        <nav>
          <NavigationMenuDemo />
        </nav>
        <div className="flex items-center">
          <button className=" items-center hidden md:flex">
            <CircleUser size={20} />
            <p className="text-sm font-medium ml-1">Entrar</p>
          </button>
          <button className="md:hidden" onClick={() => setShowMenu(true)}>
            <Menu size={20} />
          </button>
          {showMenu ? <MenuContent /> : null}
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
