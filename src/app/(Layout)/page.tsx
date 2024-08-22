"use client";
import { useState } from "react";
import { Adverts } from "./components/adverts";
import { SearchVeicle } from "./components/searchVeicle";
import { NavBrands } from "./components/NavBrands";
import { Category } from "./components/Category";
export enum VehicleTypeEnum {
  car = "car",
  motorcycle = "motorcycle",
}
export enum StateVeicleEnum {
  all = "all",
  news = "news",
  used = "used",
}

const Page = () => {
  const [vehicleType, setVehicleStateType] = useState<VehicleTypeEnum>(
    VehicleTypeEnum.car
  );
  const [stateVeicle, setStateVeicle] = useState<StateVeicleEnum>(
    StateVeicleEnum.all
  );
  return (
    <div className="bg-zinc-100">
      <Adverts />
      <section className="border-2 max-w-md w-full m-auto px-8 py-6 rounded-xl bg-white translate-y-4  lg:max-w-[996px] lg:translate-y-[-2rem] space-y-4">
        <SearchVeicle
          vehicleType={vehicleType}
          setVehicleStateType={setVehicleStateType}
          stateVeicle={stateVeicle}
          setStateVeicle={setStateVeicle}
        />
      </section>
      <section className="px-6 pt-3 m-auto space-y-4 max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <NavBrands
          vahicleType={vehicleType}
        />
      </section>
      <section className="px-6 pt-3 m-auto space-y-4 max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <Category
          vahicleType={vehicleType}
        />
      </section>
    </div>
  );
};

export default Page;
