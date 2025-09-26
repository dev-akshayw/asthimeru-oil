import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { CheckCircle, Leaf, Award, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-herbal text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Asthimeru</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Rooted in ancient Ayurvedic wisdom, Asthimeru brings you the power
            of nature&#39;s healing through our premium herbal pain relief oil.
            Experience the real extract of herbs.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-herbal-dark mb-8 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Asthimeru was born from a deep understanding of the healing
                power of Ayurveda and a commitment to bringing natural pain
                relief to people suffering from joint and muscle discomfort. Our
                journey began with extensive research into ancient Ayurvedic
                texts and traditional healing practices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After years of careful formulation and testing, we developed
                Asthimeru Herbal Oil - a unique blend of 20+ pure herbs that
                work synergistically to provide fast, effective, and natural
                pain relief. Our oil is crafted using traditional methods while
                meeting modern quality standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, thousands of people across India trust Asthimeru for
                their pain relief needs, and we continue our mission to help
                people live pain-free, active lives through the power of nature.
              </p>
            </div>
            <div className="bg-herbal-cream p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">
                    10,000+
                  </h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">20+</h3>
                  <p className="text-muted-foreground">Natural Herbs</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">100%</h3>
                  <p className="text-muted-foreground">AYUSH Certified</p>
                </div>
                <div>
                  <div className="bg-herbal-green10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-herbal-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-herbal-dark">5+</h3>
                  <p className="text-muted-foreground">Years Research</p>
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

      {/* Quality Assurance */}
      <div className="bg-herbal-cream p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-herbal-dark mb-6 text-center">
          Quality Assurance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="mb-2 bg-gradient-gold text-herbal-dark font-medium text-sm py-[2px] px-2 rounded-full w-fit">
              Quality
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Rigorous quality control at every stage of production
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <div className="mb-2 bg-gradient-gold text-herbal-dark font-medium text-sm py-[2px] px-2 rounded-full w-fit">
              Purity
            </div>
            <p className="text-center text-sm text-muted-foreground">
              100% pure herbs with no synthetic additives
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <div className="mb-2 bg-gradient-gold text-herbal-dark font-medium text-sm py-[2px] px-2 rounded-full w-fit">
              Safety
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Tested for safety and efficacy by certified labs
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2 bg-gradient-gold text-herbal-dark font-medium text-sm py-[2px] px-2 rounded-full w-fit">
              Authenticity
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Traditional Ayurvedic formulation with modern standards
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
