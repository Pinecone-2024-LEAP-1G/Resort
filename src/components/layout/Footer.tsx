"use client";

import { useState } from "react";

export const Footer = () => {
  const [showAll, setShowAll] = useState(false);

  const regions = [
    { name: "Arhangai", type: "chuluutin havtsal" },
    { name: "Bayn-Olgii", type: "kazah  Salem aleukum" },
    { name: "Baynkhongor", type: "mogoi" },
    { name: "Bulgan", type: "shiiwgai" },
    { name: "Gobi-Altai", type: "shoklad" },
    { name: "Darkhan-uul", type: "daagii" },
    { name: "Tov", type: "tovdoo" },
    { name: "Khentii", type: "hangai sayaanii" },
    { name: "Uvs", type: "Nuur" },
    { name: "Sukhbaatar", type: "hoshoo" },
    { name: "Dorno-gobi", type: "Dorno-gobi simba" },
    { name: "Ovorhangai", type: "Tom chuluu" },
    { name: "Zavhan", type: "Ulni aimag" },
    { name: "khuvsgul", type: "zaa ter us mus" },
    { name: "Omno-gobi", type: "ingenii hoormog" },
    { name: "Bagannur", type: "Manai geriig sonirhooroi" },
    { name: "Selenge", type: "Airag ayayay" },
  ];

  const visibleRegions = showAll ? regions : regions.slice(0, 6);

  return (
    <footer className="p-6 text-sm text-gray-700">
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">
          Inspiration for future getaways
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {visibleRegions.map((place, index) => (
            <div key={index} className="text-sm">
              <h3 className="font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.type}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-4 text-blue-500 underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="my-6 border-t border-gray-300"></div>
      <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">Support</h3>
          <div className="space-y-1">
            <p className="hover:underline">Help Center</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability support</p>
            <p>Cancellation options</p>
            <p>Report Neighborhood concern</p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Hosting</h3>
          <div className="space-y-1">
            <p>Airbnb your Home</p>
            <p>AirCover Air hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting Responsibly</p>
            <p>Airbnb-friendly apartments</p>
            <p>Join a free hosting class</p>
            <p>Find co-host</p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Airbnb</h3>
          <div className="space-y-1">
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift Cards</p>
            <p>Airbnb.org emergency stays</p>
          </div>
        </div>
      </div>
      <div className="my-6 border-t border-gray-300"></div>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 hover:underline">
            <span>🌐</span>
            <span>English (US)</span>
          </div>
          <div className="flex items-center space-x-1 hover:underline">
            <span>$</span>
            <span>USD</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="text-center text-xs text-gray-500 md:text-right">
          © 2024 Airbnb, Inc. ·
          <a href="#" className="hover:underline">
            Terms
          </a>
          ·
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          ·
          <a href="#" className="hover:underline">
            Privacy
          </a>
          ·
          <a href="#" className="hover:underline">
            Your Privacy Choices
          </a>
        </div>
      </div>
    </footer>
  );
};
