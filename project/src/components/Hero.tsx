import { useEffect, useState } from "react";
import { banners } from "../data/banners";

export function Hero() {
  const [index, setIndex] = useState(0);

  // Rotaciona automaticamente a cada 7,5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  const current = banners[index];

  return (
    <section className="relative h-[75vh] overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${banner.brightness}`}
          style={{ backgroundImage: `url(${banner.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/60 z-20" />

      <div className="relative z-30 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {current.title}
        </h2>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          {current.description}
        </p>
        <a
          href={current.button.href}
          className="mt-8 inline-block px-6 py-3 bg-white text-[#6666FF] rounded-xl font-semibold shadow-md hover:bg-medium-grey transition-all"
        >
          {current.button.text}
        </a>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>

  );
}

