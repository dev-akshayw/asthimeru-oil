import Header from "../components/Header";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 md:py-20 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-herbal-dark mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any queries about Asthiamrit Herbal Oil.
            We&#39;re here to help you on your journey to pain-free living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="p-6 border-[#e2e8f0] border-1 rounded-[8px]">
              <div>
                <div className="text-2xl text-herbal-dark mb-4 font-semibold">
                  Send Us a Message
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-herbal-dark mb-2">
                        First Name
                      </label>
                      <Input
                        className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-10 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-herbal-dark mb-2">
                        Last Name
                      </label>
                      <Input
                        className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-10 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-herbal-dark mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-10 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-herbal-dark mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-10 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-herbal-dark mb-2">
                      Subject
                    </label>
                    <Input
                      className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-10 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-herbal-dark mb-2">
                      Message
                    </label>
                    <Textarea
                      className="border border-[#e2e8f0] focus:ring-0 px-4 py-2 h-24 shadow-none 
                            focus:shadow-none focus:border-[#e2e8f0] focus-visible:ring-1 focus-visible:shadow-none"
                      placeholder="Tell us more about your query..."
                      rows={5}
                    />
                  </div>
                  <button className="cursor-pointer w-full bg-herbal-green hover:bg-herbal-green/90 text-white px-2 py-2 rounded-[6px]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <div className="p-6 border-[#e2e8f0] border-1 rounded-[8px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-herbal-green10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-herbal-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herbal-dark">
                      Our Address
                    </h3>
                    <p className="text-muted-foreground">
                      123 Herbal Street, Ayurveda District
                      <br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-herbal-green10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-herbal-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herbal-dark">
                      Phone Number
                    </h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-herbal-green10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-herbal-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herbal-dark">
                      Email Address
                    </h3>
                    <p className="text-muted-foreground">info@asthiamrit.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-herbal-green10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-herbal-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herbal-dark">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-herbal-green text-white rounded-[8px]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Why Choose Asthiamrit?
                </h3>
                <ul className="space-y-2">
                  <li>✓ 100% Natural Ayurvedic Ingredients</li>
                  <li>✓ Certified by Ministry of AYUSH</li>
                  <li>✓ Fast & Effective Pain Relief</li>
                  <li>✓ Free Expert Consultation</li>
                  <li>✓ Money Back Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
