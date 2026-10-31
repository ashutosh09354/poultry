import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
const Farms = lazy(() => import("./pages/Farms"));
const FarmDetail = lazy(() => import("./pages/FarmDetail"));
const Categories = lazy(() => import("./pages/Categories"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Resources = lazy(() => import("./pages/Resources"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./pages/Faq"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ReportListing = lazy(() => import("./pages/ReportListing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyCenter = lazy(() => import("./pages/PrivacyCenter"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const BusinessListingPolicy = lazy(() => import("./pages/BusinessListingPolicy"));
const RefundCancellationPolicy = lazy(() => import("./pages/RefundCancellationPolicy"));
const ContactGrievancePolicy = lazy(() => import("./pages/ContactGrievancePolicy"));
const WebsitePolicyImplementation = lazy(() => import("./pages/WebsitePolicyImplementation"));
const EggSupplyDetail = lazy(() => import("./pages/EggSupplyDetail"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex-1" tabIndex={-1}>
          <div key={pathname} className="page-transition">
            <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/farms" element={<Farms />} />
                <Route path="/farms/:slug" element={<FarmDetail />} />
                <Route path="/egg-supply/:slug" element={<EggSupplyDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/:slug" element={<ArticleDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/privacy-center" element={<PrivacyCenter />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/business-listing-policy" element={<BusinessListingPolicy />} />
                <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
                <Route path="/contact-grievance-policy" element={<ContactGrievancePolicy />} />
                <Route path="/website-policy-implementation" element={<WebsitePolicyImplementation />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/report-listing" element={<ReportListing />} />
                <Route path="/login" element={<Navigate to="/contact" replace />} />
                <Route path="/signup" element={<Navigate to="/contact" replace />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
