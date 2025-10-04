import Header from "./components/Header";
import herbalBanner from "./assets/herbal-banner.jpg";
import Image from "next/image";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";
import { BenefitsSection } from "./components/BenefitsSection";
import { UsageStepsSection } from "./components/UsageStepsSection";
// import { TrustBadges } from "./components/TrustBadges";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div
            className="lg:col-span-6"
            role="img"
            aria-label="Product gallery showing Asthiamrit herbal oil bottle"
          >
            <ProductGallery />
          </div>
          <article className="product-info lg:col-span-6 ">
            <ProductInfo />
          </article>
        </section>
      </main>

      <section
        className="product-details max-w-[1200px] mx-auto px-4 md:px-6 md:pt-12"
        role="tabpanel"
      >
        <ProductTabs />
      </section>

      <section className="benefits-section" aria-labelledby="benefits-heading">
        <BenefitsSection />
      </section>

      <Footer />
    </>
  );
}
