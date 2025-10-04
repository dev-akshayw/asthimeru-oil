"use client";
import { Star, Flame, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FreeOrder from "../assets/free-order.jpg";

export const ProductInfo = () => {
  return (
    <div className="space-y-3">
      {/* Product title and rating */}
      <div>
        <h1 className="text-3xl font-bold text-[#222529] mb-2">
          Asthiamrit ayurvedic treatment – Pain Relief Oil & Capsules for Total
          Joint Care
        </h1>
        <p className="text-muted-foreground mb-3">
          Relieves Knee Pain | Shoulder Pain And Back Pain | Arthritis | Muscle
          Soreness
        </p>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#ffd54d] text-[#ffd54d]" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(50 Reviews)</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground line-through">
          ₹3,499.00
        </span>
        <span className="text-3xl font-bold text-herbal-green">₹2,499.00</span>
        <div className="bg-gradient-gold text-herbal-dark font-bold py-[2px] px-2 rounded-full w-fit">
          Flat 28% OFF
        </div>
      </div>

      {/* Product description */}
      <p className="text-muted-foreground leading-relaxed">
        Experience long-lasting relief with our two month Dual-Action Ayurvedic
        Treatment. A powerful combination of therapeutic oil and healing
        capsules.
      </p>
      <ul className="list-disc pl-5 text-muted-foreground">
        <li>100% Natural Ingredients</li>
        <li>Doctor-Formulated</li>
        <li>GMP Certified</li>
        <li>No Side Effects</li>
      </ul>

      {/* Social proof indicators */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="font-semibold text-orange-600">85</span>
          <span className="text-muted-foreground">sold in the last 1 hour</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Eye className="h-4 w-4 text-blue-500" />
          <span className="font-semibold text-blue-600">38</span>
          <span className="text-muted-foreground">
            People are viewing this right now
          </span>
        </div>
      </div>

      {/* Quantity selector and buy button */}
      <div className="flex items-center gap-4">
        <Link
          href=""
          className="bg-gradient-herbal hover:opacity-90 font-semibold text-white px-5 py-2 rounded-md transition"
        >
          BUY Now
        </Link>
        <div className="bg-herbal-cream py-2 px-4 rounded-lg">
          <p className="text-herbal-dark font-medium text-center">
            🚚 FREE SHIPPING, DELIVERY WITHIN 5-6 DAYS
          </p>
        </div>
      </div>

      <div className="">
        <div>
          <Image
            src={FreeOrder.src}
            width={180}
            height={180}
            alt="GMP Certified"
          />
        </div>
      </div>
    </div>
  );
};
