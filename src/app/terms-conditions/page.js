// components/TermsAndConditions.tsx
export default function TermsAndConditions() {
  return (
    <section className="p-6 md:p-10 bg-white shadow rounded-xl max-w-4xl mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Terms & Conditions</h2>
      <p className="text-gray-700 mb-3">
        By booking a stay at our hotel, guests agree to the following terms and conditions. Check-in is allowed for guests aged 18 and above. A valid government-issued photo ID is mandatory at check-in.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Accepted ID proofs: Aadhar Card, Voter ID, Driving Licence, Passport, or Government-issued ID.</li>
        <li>Outside food and pets are not allowed on hotel premises.</li>
        <li>Smoking is allowed only in designated areas.</li>
        <li>Hotel reserves the right to refuse service in case of rule violations.</li>
        <li>Guests are responsible for any damages caused during their stay.</li>
      </ul>
    </section>
  );
}
