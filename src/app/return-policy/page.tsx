import Header from "../components/Header";
import { Footer } from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 md:py-16 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="md:text-4xl text-3xl font-bold head-color mb-6">
              Return and Refund Policy
            </h1>

            <div className="prose prose-lg max-w-none text-color space-y-3">
              <p>
                You can cancel an order until it has been processed at our end
                for shipping. As we process COD orders mostly through our
                dealers, the shipment processing is done within 6 hours of
                placing an order. Please call us to confirm if the order is
                shipped or not if you want to cancel it for some reason.
              </p>
              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Order Cancellation
              </h2>
              <p>
                If the order is already processed at our end, please choose the
                return and money-back option. The delivery time is usually
                between 5-7 working days.
              </p>
              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Return Process
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Returns are accepted within 7 days of delivery.</li>
                <li>
                  The product must be unused and in its original packaging.
                </li>
                <li>To initiate a return, contact our customer support.</li>
              </ul>

              <h2 className="text-2xl font-semibold head-color md:mt-8 mt-6 mb-4">
                Refund Process
              </h2>
              <p>
                Once approved, the refunded amount is credited back to the
                customer in their original payment source within 14 business
                days.
              </p>

              <p>
                For any queries, contact us at{" "}
                <a
                  href="mailto:info@asthiamrit.com"
                  className="text-[#1a7554] hover:underline font-semibold"
                >
                  info@asthiamrit.com
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

export default ReturnPolicy;
