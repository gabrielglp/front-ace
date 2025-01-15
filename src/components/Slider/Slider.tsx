'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from "../../../public/logo.svg";

interface SliderProps {
  logos: string[];
}

const Slider = ({ logos }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const extendedLogos = [...logos, ...logos]; 

  return (
    <div className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex space-x-8 items-center overflow-hidden py-4"
      >
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[150px]">
            <Image src={Logo} alt={`Logo ${index}`} width={150} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;