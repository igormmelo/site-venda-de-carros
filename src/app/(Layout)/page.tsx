"use client";
import { useState } from "react";
import { Adverts } from "./components/adverts";
import { Search } from "lucide-react";

const Page = () => {
  const [selectionVeicleType, setSelectionVeicleType] = useState("car");
  const [stateVeicle, setStateVeicle] = useState("all");
  return (
    <div>
      <div className="w-full pt-16 ">
        <Adverts />
      </div>
      <section className="border-2 drop-shadow-xl max-w-md w-full m-auto px-8 py-6 rounded-xl bg-white translate-y-4  lg:max-w-5xl lg:translate-y-[-2rem]">
        <div className="space-y-4">
          <ul className="flex gap-8 text-base font-bold items-center">
            <li>
              <button
                className={`py-1 ${
                  selectionVeicleType === "car"
                    ? "border-red-600 border-b-4 text-black"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  setSelectionVeicleType("car");
                }}
              >
                Comprar carros
              </button>
            </li>
            <li>
              <button
                className={`py-1 ${
                  selectionVeicleType === "motorcycle"
                    ? "border-red-600 border-b-4 text-black"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  setSelectionVeicleType("motorcycle");
                }}
              >
                Comprar motos
              </button>
            </li>
            <li>
              <button className="py-1 text-slate-500">Quero vender</button>
            </li>
          </ul>
          <div className="inline-block border-[1px] border-zinc-200 rounded-lg">
            <ul className="flex ">
              <li>
                <button
                  onClick={() => setStateVeicle("all")}
                  className={`px-5 py-3 text-sm font-semibold rounded-l-lg ${
                    stateVeicle == "all" ? "text-white bg-red-600" : ""
                  }`}
                >
                  Todos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setStateVeicle("news")}
                  className={`px-5 py-3 text-sm font-semibold ${
                    stateVeicle == "news" ? "text-white bg-red-600" : ""
                  }`}
                >
                  Novos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setStateVeicle("used")}
                  className={`px-5 py-3 text-sm font-semibold rounded-r-lg ${
                    stateVeicle == "used" ? "text-white bg-red-600" : ""
                  }`}
                >
                  Usados
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 w-full lg:justify-between lg:flex-row lg:gap-7">
            <div className="flex items-center h-14 border-2 border-zinc-300 rounded-lg w-full">
              <span className="p-3">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Digite marca ou modelo do carro"
                className="placeholder:font-medium placeholder:text-sm w-full h-12 focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-[415px]">
              <button className="w-full bg-red-600 h-14 rounded-lg text-white font-semibold text-base">
                VER OFERTAS (307,258)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
