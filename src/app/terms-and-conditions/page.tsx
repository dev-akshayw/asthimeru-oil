import Header from "../components/Header";
import { Footer } from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 md:py-16 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="md:text-4xl text-3xl font-bold head-color mb-6">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-color space-y-3">
              <p>
                Welcome to <strong>Asthiamrit</strong>. By accessing and using
                this website, you agree to comply with the following terms and
                conditions.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                General Terms
              </h2>
              <p>
                By using our website, you confirm that you are at least 18 years
                old or accessing this site with parental/guardian consent. We
                reserve the right to modify these terms at any time without
                prior notice.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Use of Website
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may not use this website for any unlawful or prohibited
                  purpose.
                </li>
                <li>
                  You agree not to transmit any harmful content, including
                  viruses or malicious code.
                </li>
                <li>
                  Unauthorized use of this website may result in legal action.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Product Information
              </h2>
              <p>
                We strive to provide accurate product descriptions and pricing.
                However, we do not guarantee that all information is error-free.
                We reserve the right to correct any errors and update product
                details without prior notice.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Orders & Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All orders are subject to availability and confirmation.
                </li>
                <li>Payment must be made in full before product dispatch.</li>
                <li>
                  We reserve the right to refuse or cancel any order at our
                  discretion.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, logos, and
                trademarks, is the property of Asthiamrit and is protected by
                copyright laws. Unauthorized use is prohibited.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Limitation of Liability
              </h2>
              <p>
                Asthiamrit shall not be held liable for any damages arising from
                the use or inability to use this website or its products. This
                includes, but is not limited to, direct, indirect, or
                consequential damages.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Governing Law
              </h2>
              <p>
                These terms and conditions are governed by the laws of India.
                Any disputes arising from the use of this website will be
                subject to the exclusive jurisdiction of the courts in Indore.
              </p>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms of Service,
                please contact us at{" "}
                <a
                  href="mailto:info@asthiamrit.com"
                  className="text-[#1a7554!important] hover:underline font-semibold"
                >
                  info@asthiamrit.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
