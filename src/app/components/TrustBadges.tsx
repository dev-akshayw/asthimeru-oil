"use client";
import { Leaf, Award, Truck, Users } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Users,
      title: "Free Expert Consultation",
      description: "Get personalized advice from our Ayurvedic experts",
    },
    {
      icon: Leaf,
      title: "Live Herb",
      description: "Made from 100% natural and authentic herbs",
    },
    {
      icon: Award,
      title: "Cash On Delivery",
      description: "Pay when you receive your order",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Delivered within 5-6 days nationwide",
    },
  ];

  return (
    <div className="bg-herbal-cream py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div
                  className="mx-auto w-20 h-20 bg-herbal-green rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-herbal-dark">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
