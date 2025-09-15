import React from "react";

const DonationPolicy = () => {
  return (
    <div className="mt-[80px] py-[100px] px-[80px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Donation Policy</h1>
      <p className="mb-4">
        Since <strong>Charitify</strong> works for charitable purposes, we do not
        ship any physical goods. All donations are directly utilized for our
        campaigns and causes.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How Donations Are Used</h2>
      <ul className="list-disc pl-6">
        <li>Supporting education, health, food, and shelter initiatives.</li>
        <li>Providing aid during natural disasters or emergencies.</li>
        <li>Helping underprivileged communities through ongoing projects.</li>
      </ul>
      <p className="mt-6">
        If you have any queries, feel free to reach us at{" "}
        <a href="mailto:altaqwaonlineacademy@example.com" className="text-green-600 underline">
          altaqwaonlineacademy@example.com
        </a> or <a href="tel:+923701543571" className="text-green-600 underline">+92 370 1543571</a>.
      </p>
    </div>
  );
};

export default DonationPolicy;
