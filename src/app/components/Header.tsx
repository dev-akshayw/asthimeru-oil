// src/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div
        className="bg-gradient-herbal text-primary-foreground text-center py-2 text-sm font-medium"
        role="banner"
      >
        FOR EXTRA DEALS AND DISCOUNTS CALL US NOW
      </div>

      <header
        className="bg-primary text-primary-foreground px-6 py-4"
        role="banner"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="flex items-center gap-3"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div>
              <h1 className="text-xl font-bold" itemProp="name">
                Asthimeru
              </h1>
              <p className="text-sm opacity-90" itemProp="description">
                Herbal Oil
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 text-sm"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <a
              href="tel:+919407468048"
              className="font-semibold hover:underline"
              itemProp="telephone"
              aria-label="Call Asthimeru customer service"
            >
              +91 940 7468 048
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
