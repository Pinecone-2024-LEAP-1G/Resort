"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-sm text-gray-700">
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
