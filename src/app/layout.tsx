"use client";

import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="mx-auto max-w-[1200px] px-4 text-base font-normal">
            {/* <div><Header/></div> */}
            <div>{children}</div>
            {/* <div><Footer/></div> */}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
