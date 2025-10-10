import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { CheckCircle, Leaf, Award, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      {/* <div className="bg-gradient-herbal text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Asthiamrit</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Rooted in ancient Ayurvedic wisdom, Asthiamrit brings you the power
            of nature&#39;s healing through our premium herbal pain relief oil.
            Experience the real extract of herbs.
          </p>
        </div>
      </div> */}

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-12 md:py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold head-color mb-6 md:mb-8 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-color md:text-lg leading-relaxed mb-2 md:mb-3">
                Do you or your loved ones struggle with joint pain or stiffness
                every day? Do mornings start with aches and discomfort in the
                joints or muscles? If so, Asthimeru Herbal oil is here to help!
                This powerful massage oil provides a warm, soothing feeling as
                soon as it’s applied, offering quick relief from pain.
              </p>
              <p className="text-color md:text-lg leading-relaxed mb-2 md:mb-3">
                {" "}
                It reduces swelling, loosens stiff joints, and improves blood
                flow to the area, helping you feel better faster. What makes
                Asthimeru Herbal oil special is its unique formula. zinda
                jadi-booties are added to it which continuously release their
                essence that allows the oil to go deeper into your muscles and
                joints. This helps reduce pain and adds a gentle warmth to relax
                the area.{" "}
              </p>
              <p className="text-color md:text-lg leading-relaxed mb-2 md:mb-3">
                {" "}
                Asthimeru Herbal oil is perfect for many types of pain, like
                knee pain, back pain, frozen shoulder, neck stiffness, and even
                aches from poor posture. Use it daily for two months for the
                best results and long-lasting relief. Switch to Asthimeru Herbal
                oil, the trusted Ayurvedic solution for joint pain, and enjoy a
                life with less pain and more comfort!
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-herbal-green/10 hover:border-herbal-green/30 hover:shadow-lg transition-all duration-300 hover-scale">
                <div className="p-6 text-center">
                  <div className="bg-gradient-to-br from-herbal-green to-herbal-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-herbal-green" />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="bg-herbal-cream p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">
                    50,000+
                  </h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">98%</h3>
                  <p className="text-muted-foreground">Satisfaction Rate</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">15+</h3>
                  <p className="text-muted-foreground">Year’s Experience</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">100%</h3>
                  <p className="text-muted-foreground">Natural Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-herbal-green20 border-1 rounded-[6px]">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-herbal-dark mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide natural, effective, and safe pain relief solutions
                through the ancient wisdom of Ayurveda, helping people live
                active, pain-free lives while preserving traditional healing
                knowledge for future generations.
              </p>
            </div>
          </div>

          <div className="border-herbal-green20 border-1 rounded-[6px]">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-herbal-dark mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India&#39;s most trusted brand for herbal pain relief,
                making Ayurvedic healing accessible to everyone and establishing
                a new standard for natural wellness products in the modern
                world.
              </p>
            </div>
          </div>
        </div>
        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-herbal-dark mb-8 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-1  border-slate-200 rounded-[6px]">
              <div className="p-6 text-center">
                <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-herbal-green" />
                </div>
                <h3 className="text-xl font-semibold text-herbal-dark mb-3">
                  100% Natural
                </h3>
                <p className="text-muted-foreground">
                  Made with 20+ pure herbs, no chemicals or artificial additives
                </p>
              </div>
            </div>

            <div className="border-1  border-slate-200 rounded-[6px]">
              <div className="p-6 text-center">
                <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-herbal-green" />
                </div>
                <h3 className="text-xl font-semibold text-herbal-dark mb-3">
                  AYUSH Certified
                </h3>
                <p className="text-muted-foreground">
                  Officially certified by Ministry of AYUSH for quality and
                  authenticity
                </p>
              </div>
            </div>

            <div className="border-1  border-slate-200 rounded-[6px]">
              <div className="p-6 text-center">
                <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-herbal-green" />
                </div>
                <h3 className="text-xl font-semibold text-herbal-dark mb-3">
                  Fast Acting
                </h3>
                <p className="text-muted-foreground">
                  Live herbs formula provides quick relief and long-lasting
                  comfort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
