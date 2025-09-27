"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import backPainIcon from "../assets/back-pain-icon.jpg";
import kneePainIcon from "../assets/knee-pain-icon.jpg";
import shoulderPainIcon from "../assets/shoulder-pain-icon.jpg";

export const ProductTabs = () => {
  return (
    <div className="">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex prod-tab-just w-full overflow-x-auto sm:overflow-x-visible bg-herbal-cream whitespace-nowrap rounded-md  scroll-px-2">
          <TabsTrigger
            value="description"
            className="cursor-pointer min-w-max px-4 py-2 data-[state=active]:bg-herbal-green data-[state=active]:!text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="usage"
            className="cursor-pointer min-w-max px-4 py-2 data-[state=active]:bg-herbal-green data-[state=active]:!text-white"
          >
            How to Use?
          </TabsTrigger>
          <TabsTrigger
            value="benefits"
            className="cursor-pointer min-w-max px-4 py-2 data-[state=active]:bg-herbal-green data-[state=active]:!text-white"
          >
            Why Choose Asthimeru
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="cursor-pointer min-w-max px-4 py-2 data-[state=active]:bg-herbal-green data-[state=active]:!text-white"
          >
            Benefits
          </TabsTrigger>
        </TabsList>

        {/* Description */}
        <TabsContent value="description" className="mt-6 space-y-4">
          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Don&#39;t let aches and pains limit your active lifestyle.
              Asthimeru herbal oil is India&#39;s premium pain relief oil
              prepared using ancient Ayurvedic medicinal science. The miraculous
              healing properties of this oil blend effectively heal all kinds of
              muscle and joint pains, relieve pain, reduce inflammation, restore
              mobility, and help the body heal naturally.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              It&#39;s a miracle oil for all arthritic and rheumatic pain, joint
              discomfort, muscle and ligament strains, and damaged or torn
              tissue. Asthimeru Pain Relief oil is crafted from pure herbal
              ingredients, making it a trusted solution for all pain-related
              problems.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
              <li>Provides quick relief from muscle and joint pain</li>
              <li>Reduces inflammation and restores mobility</li>
              <li>Supports natural healing using Ayurvedic ingredients</li>
              <li>Effective for arthritis, rheumatism, and sprains</li>
            </ul>
          </div>
        </TabsContent>

        {/* Usage */}
        <TabsContent value="usage" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-herbal-dark">
              Six Easy Steps to Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Clean the area where you want to apply the oil.",
                  "Take a small amount (about 3 ML) of oil on your palm.",
                  "Apply the oil on the affected joints area.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-herbal-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-herbal-dark">
                        {["First", "Second", "Third"][i]} Step
                      </h4>
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Massage thoroughly with gentle circular palm motions.",
                  "Allow the oil to absorb completely.",
                  "Wipe with wet cloth and apply coconut oil for best results.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-herbal-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {i + 4}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-herbal-dark">
                        {["Fourth", "Fifth", "Sixth"][i]} Step
                      </h4>
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Benefits */}
        <TabsContent value="benefits" className="mt-6">
          <div className="space-y-4">
            <ul className="space-y-3">
              {[
                "Contains 20+ pure herbs that are 100% natural and authentic",
                "No strong, overpowering odour",
                "Live herbs which makes it fast-acting",
                "Provides a gentle warm sensation that soothes the muscles",
                "Best joint pain relief oil made after extensive research on ayurvedic principles",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="reviews" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: backPainIcon,
                title: "Benefits in Back Pain",
                desc: "Formulated with natural ingredients, this oil targets the root causes of back pain—whether it's muscle strain, inflammation, or chronic discomfort.",
              },
              {
                icon: kneePainIcon,
                title: "Benefits in Knee Pain",
                desc: "Expertly crafted to target knee pain and enhance joint mobility. This powerful blend works deep within the skin to reduce inflammation.",
              },
              {
                icon: shoulderPainIcon,
                title: "Benefits in Shoulder Pain",
                desc: "Specially formulated to target shoulder pain and related issues like muscle tension and limited mobility.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="text-lg font-semibold text-herbal-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
