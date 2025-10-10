"use client";
import Image from "next/image";
import benefitsBackPain from "../assets/benefits-back-pain.jpg";
import benefitsKneePain from "../assets/benefits-knee-pain.jpg";
import benefitsShoulderPain from "../assets/benefits-shoulder-pain.jpg";

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className=" max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold head-color mb-4">
            Transform Your Life with Asthiamrit
          </h2>
          <p className="md:text-xl text-color max-w-3xl mx-auto">
            See the real difference our herbal oil makes in people&#39;s lives.
            From pain to freedom, from limitation to mobility - experience the
            transformation.
          </p>
        </div>

        <div className="md:space-y-16 space-y-12">
          {/* Back Pain Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold head-color mb-4 md:mb-6">
                Benefits in Back Pain
              </h3>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                Tired of dealing with constant back pain or stiffness? Our Joint
                Pain Relief Oil is here to help. Formulated with natural
                ingredients, this oil targets the root causes of back
                pain—whether it&#39;s muscle strain, inflammation, or chronic
                discomfort.
              </p>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                It works quickly to soothe pain, relax tense muscles, and
                improve flexibility, so you can move more freely. Whether
                you&#39;re struggling with everyday back stiffness or a more
                serious issue, this oil provides fast, long-lasting relief,
                helping you get back to living pain-free.
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Targets root causes of back pain
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Relaxes tense muscles and improves flexibility
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Fast, long-lasting pain relief
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={benefitsBackPain.src}
                  width={650}
                  height={470}
                  alt="Before and after back pain relief with Asthiamrit oil"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Knee Pain Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={benefitsKneePain.src}
                  width={650}
                  height={470}
                  alt="Before and after knee pain relief with Asthiamrit oil"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold head-color mb-4 md:mb-6">
                Benefits in Knee Pain
              </h3>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                Experience fast, effective relief with our Joint Pain Relief
                Oil, expertly crafted to target knee pain and enhance joint
                mobility. This powerful blend of natural ingredients works deep
                within the skin to reduce inflammation, ease discomfort, and
                support overall joint health.
              </p>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                Whether you&#39;re dealing with arthritis, chronic pain, or
                everyday stiffness, our oil provides soothing relief and helps
                restore flexibility, allowing you to move with greater ease.
                Apply regularly for lasting comfort and improved knee function.
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Reduces inflammation and joint discomfort
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Enhances joint mobility and flexibility
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Effective for arthritis and chronic pain
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shoulder Pain Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold head-color mb-4 md:mb-6">
                Benefits in Shoulder Pain
              </h3>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                Struggling with shoulder pain or stiffness? Our Herbal Joint
                Pain Relief Oil is the natural solution you&#39;ve been looking
                for. Specially formulated to target shoulder pain and related
                issues like muscle tension and limited mobility, this powerful
                oil works deep to reduce inflammation and soothe discomfort.
              </p>
              <p className="text-color leading-relaxed mb-2 md:mb-3">
                Whether it&#39;s chronic pain, strain from daily activities, or
                difficulty lifting your arm, our oil provides fast-acting relief
                to get you back to your routine with ease. Massage into the
                affected area for immediate comfort and long-lasting results.
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Targets muscle tension and limited mobility
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Fast-acting relief for chronic pain
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-herbal-green w-2 h-2 rounded-full"></div>
                  <span className="text-color">
                    Improves range of motion and flexibility
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  width={650}
                  height={470}
                  src={benefitsShoulderPain}
                  alt="Before and after shoulder pain relief with Asthiamrit oil"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
