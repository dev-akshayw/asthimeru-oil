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
            Why Choose Asthiamrit
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
              Asthiamrit – Ayurvedic Oil & Capsules for Complete Joint Care
              Experience the power of ancient Ayurvedic wisdom with Asthiamrit,
              a premium herbal formulation designed to relieve pain, reduce
              inflammation, and strengthen bones and joints.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our Ayurvedic oil penetrates deep into muscles and joints,
              improving blood circulation, easing stiffness, and promoting
              faster recovery. The capsules work from within to nourish
              cartilage, support bone health, and maintain long-term joint
              flexibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Asthiamrit is ideal for people suffering from joint pain,
              arthritis, back pain, muscle stiffness, and age-related discomfort
              — helping you stay active, healthy, and pain-free naturally.
            </p>
          </div>
        </TabsContent>

        {/* How to use */}
        {/* <TabsContent value="usage" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-herbal-dark">
              Six Easy Steps to Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Clean the area where you want to apply the oil.",
                  "Take around 3-5 mL of Asthiamrit ayurvedic oil on your palm.",
                  "Apply on the affected joint and massage gently with small circular motions of your palm for upto 7 minutes.",
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
                  "Allow the oil to absorb completely.",
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
        </TabsContent> */}

        <TabsContent value="usage" className="mt-6">
          <div className="space-y-4">
            <ul className="space-y-3">
              {[
                "Take around 3-5 mL of Asthiamrit ayurvedic oil on your palm.",
                "Apply on the affected joint and massage gently with small circular motions of your palm for upto 7 minutes.",
                "Allow the oil to absorb completely.",
                "After the massage, wipe the area with a wet cloth and apply either a lotion of your preference or coconut oil over the area.",
                "For long-term relief from joint pain, use for 2 months.",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* why choose Asthiamrit */}
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

        {/* Benefits */}
        {/* <TabsContent value="reviews" className="mt-6">
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
        </TabsContent> */}
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-4">
            <ul className="space-y-3">
              {[
                "Powerful combination of many potent ayurvedic herbs",
                "Relieves pain and reduces inflammation in joints, muscles and tendons",
                "Best joint pain oil to ease muscle stiffness and persistent body aches",
                "Has no side effects",
                "Rigorously tested to ensure premium quality",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
