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
const ListYourFarm = lazy(() => import("./pages/ListYourFarm"));
const Resources = lazy(() => import("./pages/Resources"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./pages/Faq"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ReportListing = lazy(() => import("./pages/ReportListing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Legal = lazy(() => import("./pages/Legal"));

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
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/farms" element={<Farms />} />
              <Route path="/farms/:slug" element={<FarmDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/list-your-farm" element={<ListYourFarm />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/privacy-policy" element={<Legal page="privacy" />} />
              <Route path="/terms" element={<Legal page="terms" />} />
              <Route path="/listing-guidelines" element={<Legal page="guidelines" />} />
              <Route path="/report-listing" element={<ReportListing />} />
              <Route path="/login" element={<Navigate to="/list-your-farm" replace />} />
              <Route path="/signup" element={<Navigate to="/list-your-farm" replace />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
