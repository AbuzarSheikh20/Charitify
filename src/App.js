import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import DonationPolicy from "./pages/DonationPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/donation-policy" element={<DonationPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
