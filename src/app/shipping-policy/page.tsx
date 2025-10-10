import Header from "../components/Header";
import { Footer } from "../components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 md:py-16 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="md:text-4xl text-3xl font-bold head-color mb-6">
              Shipping Policy
            </h1>

            <div className="prose prose-lg max-w-none text-color space-y-3">
              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Domestic Shipping (India)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All domestic orders are processed within{" "}
                  <strong>1-2 business days</strong> after payment confirmation.
                </li>
                <li>
                  Estimated delivery time: <strong>5 to 7 business days</strong>{" "}
                  (excluding weekends and holidays).
                </li>
                <li>
                  Tracking details will be provided once the order is
                  dispatched.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                International Shipping
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Orders are processed within <strong>2-3 business days</strong>{" "}
                  after payment confirmation.
                </li>
                <li>
                  Estimated delivery time:{" "}
                  <strong>7 to 10 business days</strong> (excluding weekends and
                  holidays).
                </li>
                <li>
                  Shipping costs and delivery times vary based on destination
                  and customs regulations.
                </li>
                <li>
                  Customers are responsible for any applicable customs duties,
                  taxes, or import fees.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Delays & Exceptions
              </h2>
              <p>
                While we strive to deliver orders on time, potential delays may
                occur due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>High order volumes during peak seasons.</li>
                <li>
                  Postal service disruptions (e.g., strikes, weather conditions,
                  global supply chain issues).
                </li>
                <li>Customs clearance delays for international shipments.</li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Order Tracking
              </h2>
              <p>
                Once your order is shipped, you will receive an email with
                tracking details. You can monitor your package&apos;s status and
                estimated delivery time.
              </p>
              <p>
                For any questions or concerns, feel free to{" "}
                <a
                  href="/contact-us"
                  className="text-[#1a7554] hover:underline font-semibold"
                >
                  contact our support team.
                </a>
                We&apos;re here to help!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
