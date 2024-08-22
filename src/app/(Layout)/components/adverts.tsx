import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Adverts = () => {
  const adverts = [
    "/anuncios/anuncio_1.png",
    "/anuncios/anuncio_2.png",
    "/anuncios/anuncio_3.png",
    "/anuncios/anuncio_4.png",
    "/anuncios/anuncio_5.png",
  ];
  const [position, setPosition] = useState(0);

  const prevAdverts = () => {
    if (position === 0) return setPosition(adverts.length - 1);
    setPosition(position - 1);
  };
  const nextAdverts = () => {
    if (position === adverts.length - 1) return setPosition(0);
    setPosition(position + 1);
  };
  const direction = (index: number) => {
    const isLeft =
      position - 1 == index || (position == 0 && index == adverts.length - 1);
    const center = position === index;
    const isRight =
      position + 1 == index || (index == 0 && position == adverts.length - 1);
    if (center) return "";
    if (isLeft) return "-translate-x-full";
    if (isRight) return "translate-x-full";

    return "hidden";
  };

  return (
    <div className="w-full pt-16">
      <section className="w-full relative h-20 sm:h-24 md:h-32 lg:h-60 xl:h-72 2xl:h-80 flex overflow-hidden">
        {/*Anuncios*/}
        {adverts.map((item, index) => (
          <Image
            key={item}
            src={item}
            fill
            alt="anuncios"
            className={`absolute transition-transform duration-700 ${direction(
              index
            )}`}
          />
        ))}

        <div className="flex justify-between absolute w-full px-6 top-5 md:top-12 lg:top-24 xl:top-32 2xl:top-36">
          <button onClick={prevAdverts}>
            <CircleArrowLeft
              size={32}
              color="#0a0a0a"
              strokeWidth={1}
              className="fill-white opacity-75 hover:opacity-100 "
            />
          </button>
          <button onClick={nextAdverts}>
            <CircleArrowRight
              size={32}
              color="#0a0a0a"
              strokeWidth={1}
              className="fill-white opacity-75 hover:opacity-100"
            />
          </button>
        </div>
      </section>
    </div>
  );
};
