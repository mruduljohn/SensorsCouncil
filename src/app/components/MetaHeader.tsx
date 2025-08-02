'use client';

export default function MetaHeader() {
  return (
    <div className="meta-nav bg-black text-white">
      <div className="container-custom flex justify-between items-center">
        <p className="text-sm py-2">
          <a href="https://www.ieee.org/index.html" className="hover:underline">IEEE.org</a> &#160;|&#160; 
          <a href="https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp" className="hover:underline">IEEE <em>Xplore</em><sup>®</sup></a>&#160;|&#160; 
          <a href="https://standards.ieee.org/" className="hover:underline">IEEE Standards</a> &#160;|&#160; 
          <a href="https://spectrum.ieee.org/" className="hover:underline">IEEE Spectrum</a> &#160;|&#160; 
          <a href="https://www.ieee.org/sitemap.html" className="hover:underline">More Sites</a>
        </p>
        <p className="text-sm py-2">
          <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" className="hover:underline">Join IEEE</a> &#160;|&#160; 
          <a href="https://www.ieee.org/give" className="hover:underline">Donate</a>
        </p>
      </div>
    </div>
  )
} 