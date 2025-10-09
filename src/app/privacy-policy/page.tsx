import Header from "../components/Header";
import { Footer } from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 md:py-16 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 className="md:text-4xl text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-3">
              <p>
                We are <strong>asthimeru.com</strong>, an e-commerce website. In
                this Privacy Policy, references to &quot;<strong>you</strong>
                &quot; mean any person submitting data to us, our agent, or the
                Site.
              </p>

              <p>
                If you have any comments or suggestions, feel free to contact us
                at our Indore address or via email at
                <a
                  href="mailto:info@asthimeru.com"
                  className="text-herbal-green hover:underline hover:decoration-herbal-green"
                >
                  info@asthimeru.com
                </a>
                .
              </p>

              <p>
                Your privacy is important to us. We only collect and use your
                information in accordance with this policy. We do not collect
                unnecessary data and only store it as required by law or for
                service purposes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                What Data We Collect
              </h2>
              <p>
                When placing an order, we may collect and process the following
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Title, Name, Gender</li>
                <li>Email Address, Postal Address, Delivery Address</li>
                <li>Phone Number, Mobile Number</li>
                <li>Payment Details (Card or Bank Account Information)</li>
              </ul>
              <p>
                We use this data for processing payments, deliveries, and
                customer support. We do not sell or rent your personal data to
                third parties.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                Fraud Prevention & Security
              </h2>
              <p>
                We use authorized payment services with strict fraud prevention
                policies. Any disputes will be handled by Indore courts.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                How We Use Your Data
              </h2>
              <p>We may use your information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Market research (your data will remain anonymous).</li>
                <li>
                  Surveys or opinion polls (email required for competitions
                  only).
                </li>
                <li>
                  Sending promotional updates, newsletters, and related business
                  offers.
                </li>
                <li>Analyzing user behavior to improve the Site.</li>
              </ul>
              <p>You may opt-out of marketing communications at any time.</p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                Third Parties & Links
              </h2>
              <p>We may share your details with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Companies within our group.</li>
                <li>
                  Subcontractors for deliveries, payments, and customer support.
                </li>
                <li>Fraud prevention and credit risk agencies.</li>
              </ul>
              <p>
                We do not sell your personal data. However, if our business is
                sold, data may be transferred to the new owner.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device to enhance
                user experience.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Cookies help recognize your browser for a personalized
                  experience.
                </li>
                <li>
                  We use cookies to save login details and improve navigation.
                </li>
                <li>
                  You can disable cookies in your browser settings, but it may
                  limit site functionality.
                </li>
              </ul>
              <p>We use Google Analytics for website performance tracking.</p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                Security
              </h2>
              <p>We use advanced security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data stored on secure servers with firewalls.</li>
                <li>Strict access controls and authentication measures.</li>
                <li>Encryption for sensitive information.</li>
              </ul>
              <p>
                While we implement strong security measures, we recommend not
                sharing sensitive payment details over unencrypted
                communication.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 md:mt-8 mt-6 mb-4">
                Consent
              </h2>
              <p>
                By using our site, you consent to this Privacy Policy. Changes
                may be made at any time, and we are not responsible for
                notifying users.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
