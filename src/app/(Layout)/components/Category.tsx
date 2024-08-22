import Image from "next/image";
import Link from "next/link";
import { VehicleTypeEnum } from "../page";
import { brandsCar, brandsMotorcycle } from "@/app/_data/brands";
import { ImageCategoryCar, ImageCategoryMotorcycle } from "@/app/_data/category";

export const Category = ({ vahicleType }: { vahicleType: VehicleTypeEnum }) => {
  return (
    <>
      <h2 className="text-base text-slate-500 font-semibold pt-4 lg:pt-0">
        Categorias
      </h2>
      <div className="grid sm:auto-cols-auto sm:grid-flow-col w-full sm:h-52 gap-2 h-96 ">
        {vahicleType == VehicleTypeEnum.car
          ? ImageCategoryCar.map((item, index) => (
              <Link
                href={`/${item.title}`}
                className="h-full mb-1 cursor-pointer relative"
                key={index}
              >
                <h2 className="z-10 text-white xl:text-2xl font-bold sm:font-medium absolute pl-4 pb-4 bottom-0 ">
                  {item.title}
                </h2>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="absolute rounded-lg object-cover"
                />
              </Link>
            ))
          : ImageCategoryMotorcycle.map((item, index) => (
              <Link
                href={`/${item.title}`}
                className="h-full mb-1 cursor-pointer relative"
                key={index}
              >
                <h2 className="z-10 text-white xl:text-2xl font-bold sm:font-medium absolute pl-4 pb-4 bottom-0 ">
                  {item.title}
                </h2>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="absolute rounded-lg object-cover"
                />
              </Link>
            ))}
      </div>
    </>
  );
};
