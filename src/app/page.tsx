import Header from "./components/Header";
import herbalBanner from "./assets/herbal-banner.jpg";
import Image from "next/image";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero banner with semantic markup */}
      <section className="relative h-32 overflow-hidden" role="banner">
        <Image
          src={herbalBanner.src}
          alt="Premium Ayurvedic herbal ingredients used in Asthimeru pain relief oil"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="128"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-herbal-green/80 to-transparent"></div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            role="img"
            aria-label="Product gallery showing Asthimeru herbal oil bottle"
          >
            <ProductGallery />
          </div>
          <article className="product-info">
            <ProductInfo />
          </article>
        </section>

        <section className="product-details" role="tabpanel"></section>
      </main>
    </>
  );
}
