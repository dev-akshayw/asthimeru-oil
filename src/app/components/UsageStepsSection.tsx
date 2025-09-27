"use client";
import {
  CheckCircle,
  Hand,
  Droplets,
  RotateCcw,
  Clock,
  Sparkles,
} from "lucide-react";

export const UsageStepsSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Sparkles className="w-6 h-6" />,
      title: "Clean the Area",
      description:
        "Clean the area where you want to apply the oil for better absorption.",
      color: "bg-blue-500",
    },
    {
      number: 2,
      icon: <Droplets className="w-6 h-6" />,
      title: "Take Small Amount",
      description: "Take a small amount (about 3 ML) of oil on your palm.",
      color: "bg-green-500",
    },
    {
      number: 3,
      icon: <Hand className="w-6 h-6" />,
      title: "Apply to Affected Area",
      description: "Apply the oil on the affected joints area gently.",
      color: "bg-purple-500",
    },
    {
      number: 4,
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Massage Thoroughly",
      description:
        "Massage thoroughly with gentle circular palm motions for 5-7 minutes.",
      color: "bg-orange-500",
    },
    {
      number: 5,
      icon: <Clock className="w-6 h-6" />,
      title: "Allow Absorption",
      description: "Allow the oil to absorb completely into the skin.",
      color: "bg-red-500",
    },
    {
      number: 6,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Apply Daily",
      description: "Should be applied 1 to 2 times a day for best results.",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="md:py-16 bg-herbal-cream/30">
      <div className=" max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-herbal-dark mb-4">
            Six Easy Steps to Use Asthimeru Oil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to get maximum benefits from your
            Asthimeru Herbal Oil. Consistent application is key to achieving
            optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-herbal-cream"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6">
                <div className="bg-herbal-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div
                className={`${step.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 mt-4`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-herbal-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (hidden on last items) */}
              {step.number < 6 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-herbal-green/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-herbal-green text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Pain-Free Living?
          </h3>
          <p className="text-herbal-cream mb-6 max-w-2xl mx-auto">
            Start your journey to natural pain relief today. Follow these simple
            steps and feel the difference that ancient Ayurvedic wisdom can make
            in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-herbal-green px-8 py-3 rounded-lg font-semibold hover:bg-herbal-cream transition-colors">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1a7554] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
