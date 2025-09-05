"use client";

import Image from "next/image";

import slide1 from "@/public/assets/images/aboutImage.jpg";
import slide2 from "@/public/assets/images/contactImage01.jpg";
import slide3 from "@/public/assets/images/contactImage02.jpg";
import slide4 from "@/public/assets/images/contactImage03.jpg";

const slides = [slide1, slide2, slide3, slide4];

const ContactBackgroundCarousel = () => {
  return (
    <div className="absolute top-0 left-0 h-1/4 w-full overflow-hidden md:h-2/5">
      <div
        className="flex h-full animate-[slide_35s_linear_infinite]"
        style={{ width: `${slides.length * 2 * 100}%` }}
      >
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{ width: `${100 / (slides.length * 2)}%` }}
          >
            <Image
              src={slide}
              alt={`Ambiente da cafeteria ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
    </div>
  );
};

export default ContactBackgroundCarousel;
