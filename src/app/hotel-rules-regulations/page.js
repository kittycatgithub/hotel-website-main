// components/HotelRulesRegulations.tsx
export default function HotelRulesRegulations() {
  return (
    <section className="p-6 md:p-10 bg-white shadow rounded-xl max-w-4xl mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hotel Rules & Regulations</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Primary guest must be at least 18 years old.</li>
        <li>Accepted ID proofs: Aadhar Card, Voter ID, Driving Licence, Passport, Government ID.</li>
        <li>Outside food is not permitted within hotel premises.</li>
        <li>Pets are strictly not allowed.</li>
        <li>Smoking is permitted only in designated areas.</li>
        <li>Guests must follow safety protocols and emergency procedures as displayed.</li>
        <li>Children and extra bed policy applies as per room category and availability.</li>
        <li>Guests are encouraged to support green practices during their stay.</li>
        <li>Use of hotel amenities is at the guest’s own risk; a waiver may be required.</li>
        <li>Wi-Fi usage must adhere to acceptable internet usage standards.</li>
      </ul>
    </section>
  );
}
