"use client";

import "./globals.css";
import { connectToMongoDB } from "lib/db";
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  connectToMongoDB()
  return (
    <html lang="en">
      <body>
        <main>
          <div className="mx-auto max-w-[1200px] px-4 text-base font-normal sm:px-8 md:px-8">
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
