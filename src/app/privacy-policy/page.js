// components/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <section className="p-6 md:p-10 bg-white shadow rounded-xl max-w-4xl mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacy Policy</h2>
      <p className="text-gray-700 mb-3">
        We are committed to protecting your privacy. Any personal information collected during booking or service usage is stored securely and used only for hospitality and legal purposes.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Data collected: Name, contact info, payment details, ID proofs.</li>
        <li>We never sell or share data with third parties except when required by law.</li>
        <li>All information is protected using appropriate security measures.</li>
        <li>Guests may request access to or deletion of their data, as per applicable laws.</li>
        <li>We comply with GDPR and similar privacy regulations.</li>
      </ul>
    </section>
  );
}
