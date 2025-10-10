"use client";
import { useState } from "react";
import Image from "next/image";
import AsthimeruProd1 from "../assets/Asthimeru-prod1.jpg";
import AsthimeruProd2 from "../assets/Asthimeru-prod2.jpg";
import AsthimeruProd3 from "../assets/Asthimeru-prod3.jpg";
import AsthimeruProd4 from "../assets/Asthimeru-prod4.jpg";

export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    AsthimeruProd1,
    AsthimeruProd2,
    AsthimeruProd3,
    AsthimeruProd4,
  ];
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gradient-nature cursor-pointer">
        <Image
          src={images[selectedImage].src}
          width={550}
          height={550}
          alt="Asthiamrit Herbal Oil"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Thumbnail images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square cursor-pointer overflow-hidden rounded-md transition-all duration-200 ${
              selectedImage === index
                ? "border-herbal-light shadow-lg"
                : "border-herbal-light/20 hover:border-herbal-light/40"
            }`}
          >
            <Image
              src={img}
              alt={"Product view ${index + 1}"}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
