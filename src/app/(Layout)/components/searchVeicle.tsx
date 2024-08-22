import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { StateVeicleEnum, VehicleTypeEnum } from "../page";
export const SearchVeicle = ({
  vehicleType,
  setVehicleStateType,
  stateVeicle,
  setStateVeicle
}: {
  vehicleType: VehicleTypeEnum;
  setVehicleStateType: React.Dispatch<React.SetStateAction<VehicleTypeEnum>>;
  stateVeicle: StateVeicleEnum;
  setStateVeicle:React.Dispatch<React.SetStateAction<StateVeicleEnum>>
}) => {
  return (
    <>
      <ul className="flex gap-8 text-base font-bold items-center">
        <li>
          <button
            className={cn(
              "py-[6px] transform delay-75",
              vehicleType === VehicleTypeEnum.car
                ? "border-red-600 border-b-[3px] text-black"
                : "text-slate-400"
            )}
            onClick={() => {
              setVehicleStateType(VehicleTypeEnum.car);
            }}
          >
            Comprar carros
          </button>
        </li>
        <li>
          <button
            className={cn(
              "py-[6px] transform delay-75",
              vehicleType === VehicleTypeEnum.motorcycle
                ? "border-red-600 border-b-[3px] text-black"
                : "text-slate-400"
            )}
            onClick={() => {
              setVehicleStateType(VehicleTypeEnum.motorcycle);
            }}
          >
            Comprar motos
          </button>
        </li>
        <li>
          <button className="py-[6px] text-slate-500">Quero vender</button>
        </li>
      </ul>
      <div className="inline-block border-[1px] border-zinc-200 rounded-lg">
        <ul className="flex ">
          <li>
            <button
              onClick={() => setStateVeicle(StateVeicleEnum.all)}
              className={cn(
                "px-5 py-[10px] text-sm font-semibold rounded-l-lg transform delay-75 duration-100",
                {
                  "text-white bg-red-600": stateVeicle == StateVeicleEnum.all,
                }
              )}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              onClick={() => setStateVeicle(StateVeicleEnum.news)}
              className={cn("px-5 py-[10px] text-sm font-semibold transform delay-75 duration-100", {
                "text-white bg-red-600": stateVeicle == StateVeicleEnum.news,
              })}
            >
              Novos
            </button>
          </li>
          <li>
            <button
              onClick={() => setStateVeicle(StateVeicleEnum.used)}
              className={cn(
                "px-5 py-[10px] text-sm font-semibold rounded-r-lg transform delay-75 duration-100",
                {
                  "text-white bg-red-600": stateVeicle == StateVeicleEnum.used,
                }
              )}
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
    </>
  );
};
