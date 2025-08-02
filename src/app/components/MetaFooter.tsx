'use client';

export default function MetaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white text-xs py-4">
      <div className="container-custom">
        <div className="mb-4">
          <p>
            <a href="http://www.ieee.org/index.html" className="hover:underline">Home</a> &#160;|&#160; 
            <a href="http://www.ieee.org/sitemap.html" className="hover:underline">Sitemap/More Sites</a> &#160;|&#160; 
            <a href="http://www.ieee.org/about/contact_center/index.html" className="hover:underline">Contact</a> &#160;|&#160; 
            <a href="http://www.ieee.org/accessibility_statement.html" className="hover:underline">Accessibility</a> &#160;|&#160; 
            <a href="http://www.ieee.org/p9-26.html" className="hover:underline">Nondiscrimination Policy</a> &#160;|&#160; 
            <a href="http://ieee-ethics-reporting.org/" className="hover:underline">IEEE Ethics Reporting</a> &#160;|&#160; 
            <a href="https://privacy.ieee.org/policies" className="hover:underline">IEEE Privacy Policy</a> &#160;|&#160; 
            <a href="https://www.ieee.org/about/help/site-terms-conditions.html" className="hover:underline">Terms & Disclosures</a>
          </p>
        </div>
        <p>
          &copy; Copyright {currentYear} IEEE - All rights reserved. A public charity, IEEE is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
      </div>
    </div>
  )
} 