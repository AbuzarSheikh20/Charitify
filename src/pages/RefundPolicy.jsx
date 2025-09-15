import React from "react";

const RefundPolicy = () => {
  return (
    <div className="mt-[80px] py-[100px] px-[80px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
      <p className="mb-4">
        At <strong>Charitify</strong>, donations once made cannot usually be
        refunded or canceled. However, if you have made an error in your
        donation, please contact us immediately.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Eligibility for Refunds</h2>
      <ul className="list-disc pl-6">
        <li>Duplicate donation transactions.</li>
        <li>Accidental payment of an incorrect amount.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How to Request a Refund</h2>
      <p>
        Please email us at{" "}
        <a href="mailto:altaqwaonlineacademy@example.com" className="text-green-600 underline">
          altaqwaonlineacademy@example.com
        </a> or <a href="tel:+923701543571" className="text-green-600 underline">+92 370 1543571</a> within 7 days of the transaction with proof of payment.
      </p>
      <p className="mt-6">
        Refunds will be processed to the same account/card from which the
        donation was made.
      </p>
    </div>
  );
};

export default RefundPolicy;
