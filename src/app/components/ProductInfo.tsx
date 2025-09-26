"use client";
import { Star, Flame, Eye } from "lucide-react";
import Link from "next/link";

export const ProductInfo = () => {
  return (
    <div className="space-y-6">
      {/* Product title and rating */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Asthimeru Herbal Oil - experience the real extract of herbs
        </h1>
        <p className="text-muted-foreground mb-3">
          Relieves Knee Pain | Shoulder Pain And Back Pain | Arthritis | Muscle
          Soreness
        </p>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-herbal-gold text-herbal-gold"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(50 Reviews)</span>
        </div>
      </div>

      {/* Product variant */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">QUANTITY:</p>
        <div className="bg-herbal-cream text-herbal-dark font-medium w-fit py-[2px] px-2 rounded-full width-fit">
          120ML (2) + 2 MONTHS CAPSULE FREE
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
        Asthimeru herbal oil, India&#39;s premium pain relief oil, harnesses
        ancient Ayurvedic wisdom to heal muscle and joint pains. It reduces
        inflammation, restores mobility, and supports natural healing. Ideal for
        arthritis, rheumatism, joint discomfort, muscle strains, and tissue
        damage, Asthimeru offers effective relief using pure herbal ingredients.
      </p>

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
          href="/buy"
          className="bg-gradient-herbal hover:opacity-90 font-semibold text-white px-5 py-2 rounded-md transition"
        >
          BUY Now
        </Link>
      </div>

      {/* Free shipping banner */}
      <div className="bg-herbal-cream p-4 rounded-lg">
        <p className="text-herbal-dark font-medium text-center">
          🚚 FREE SHIPPING, DELIVERY WITHIN 5-6 DAYS
        </p>
      </div>
    </div>
  );
};
