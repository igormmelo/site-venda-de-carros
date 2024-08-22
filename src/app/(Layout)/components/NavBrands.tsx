import Image from "next/image";
import Link from "next/link";
import { VehicleTypeEnum } from "../page";
import { brandsCar, brandsMotorcycle } from "@/app/_data/brands";

export const NavBrands = ({
  vahicleType,
}: {
  vahicleType: VehicleTypeEnum;
}) => {
  return (
    <>
      <h2 className="text-base text-slate-500 font-semibold pt-4 lg:pt-0">
        Lojas Oficiais
      </h2>
      <div className="grid grid-cols-6 w-full transform">
        {vahicleType == VehicleTypeEnum.car
          ? brandsCar.map((item, index) => (
              <button
                key={index}
                className="rounded-full bg-white flex items-center justify-center p-2 border-2 border-zinc-300 drop-shadow-sm mb-1 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-[145px] xl:h-[145px] "
              >
                <Link href={`/${item.brand}`}>
                  <Image
                    src={item.src}
                    alt="Logo Nissan"
                    width={80}
                    height={80}
                  />
                </Link>
              </button>
            ))
          : brandsMotorcycle.map((item, index) => (
              <button
                key={index}
                className="rounded-full bg-white flex items-center justify-center p-2 border-2 border-zinc-300 drop-shadow-sm mb-1 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-[145px] xl:h-[145px] "
              >
                <Link href={`/${item.brand}`}>
                  <Image
                    src={item.src}
                    alt="Logo Nissan"
                    width={80}
                    height={80}
                  />
                </Link>
              </button>
            ))}
      </div>
    </>
  );
};
