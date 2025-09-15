import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mt-[80px] py-[100px] px-[80px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Charitify</strong>, we respect your privacy and are committed
        to protecting your personal data. This policy explains how we collect,
        use, and safeguard your information.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>
        We may collect details like your name, email, phone number, and payment
        information when you donate or contact us.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
      <ul className="list-disc pl-6">
        <li>To process donations and issue receipts.</li>
        <li>To communicate with you about campaigns and updates.</li>
        <li>To comply with legal and regulatory requirements.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p>
        We use standard security measures to protect your personal information.
        However, no method of transmission over the Internet is 100% secure.
      </p>
      <p className="mt-6">
        If you have any questions, please contact us at{" "}
        <a href="mailto:altaqwaonlineacademy@example.com" className="text-green-600 underline">
          altaqwaonlineacademy@example.com
        </a> or <a href="tel:+923701543571" className="text-green-600 underline">+92 370 1543571</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
