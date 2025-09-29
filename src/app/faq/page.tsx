import Header from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Asthiamrit Herbal Oil?",
      answer:
        "Asthiamrit Herbal Oil is India&#39;s premium pain relief oil prepared using ancient Ayurvedic medicinal science. It contains 20+ pure herbs that are 100% natural and authentic, designed to provide fast and effective relief from muscle and joint pain.",
    },
    {
      question: "How does Asthiamrit Oil work?",
      answer:
        "Our herbal oil works by penetrating deep into the skin to reduce inflammation, relieve pain, and restore mobility. The blend of natural herbs provides a gentle warm sensation that soothes muscles and supports the body&#39;s natural healing process.",
    },
    {
      question: "What types of pain can Asthiamrit Oil treat?",
      answer:
        "Asthiamrit Oil is effective for various types of pain including back pain, knee pain, shoulder pain, arthritis, rheumatism, joint discomfort, muscle strains, ligament injuries, and damaged or torn tissue.",
    },
    {
      question: "How should I use Asthiamrit Oil?",
      answer:
        "Clean the affected area, take about 3ml of oil on your palm, apply to the affected joints, massage thoroughly with gentle circular motions, allow the oil to absorb completely, then wipe with a wet cloth and apply coconut oil for best results.",
    },
    {
      question: "How often should I apply the oil?",
      answer:
        "For best results, apply Asthiamrit Oil 1-2 times daily. Consistency is key to experiencing the full benefits of the herbal ingredients.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Asthiamrit Oil is made from 100% natural herbs and is generally safe for external use. However, if you have sensitive skin or allergies, we recommend doing a patch test before full application. Discontinue use if any irritation occurs.",
    },
    {
      question: "Is Asthiamrit Oil certified?",
      answer:
        "Yes, Asthiamrit Oil is certified by the Ministry of AYUSH, ensuring its authenticity and quality as per Ayurvedic standards.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Many users report feeling relief within the first few applications. However, for chronic conditions, consistent use over 2-4 weeks typically shows significant improvement.",
    },
    {
      question: "Can children use Asthiamrit Oil?",
      answer:
        "While the oil is made from natural ingredients, we recommend consulting with a healthcare provider before using it on children under 12 years of age.",
    },
    {
      question: "What makes Asthiamrit different from other pain relief oils?",
      answer:
        "Asthiamrit stands out because it contains live herbs making it fast-acting, has no strong overpowering odor, is made after extensive research on Ayurvedic principles, and provides a gentle warm sensation that naturally soothes muscles.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we stand behind our product. If you&#39;re not satisfied with the results within 30 days of purchase, we offer a full money-back guarantee.",
    },
    {
      question: "How should I store the oil?",
      answer:
        "Store Asthiamrit Oil in a cool, dry place away from direct sunlight. Keep the bottle tightly closed and out of reach of children.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto md:px-6 px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-herbal-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Asthiamrit Herbal Oil and how
            it can help you achieve pain-free living.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-herbal-cream rounded-lg mb-2 md:mb-4 md:px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-herbal-dark hover:text-herbal-green cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="md:mt-8 text-center bg-herbal-cream px-4 py-8 md:p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-herbal-dark mb-4">
          Still Have Questions?
        </h2>
        <p className="text-muted-foreground mb-6">
          Can&#39;t find the answer you&#39;re looking for? Our expert team is
          here to help you.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <a
            href="/contact"
            className="inline-block bg-herbal-green text-white px-6 py-3 rounded-lg hover:bg-herbal-green/90 transition-colors"
          >
            Contact Our Support Team
          </a>
          <a
            href="tel:+919876543210"
            className="inline-block border-2 border-herbal-green text-herbal-green px-6 py-3 rounded-lg hover:bg-herbal-green hover:text-white transition-colors"
          >
            Call: +91 98765 43210
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
