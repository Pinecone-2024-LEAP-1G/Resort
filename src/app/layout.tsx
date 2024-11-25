"use client";

import { connectToMongoDB } from "@/lib/db";
import "./globals.css";
import Header from "@/components/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  connectToMongoDB();
  return (
    <NuqsAdapter>
      <html lang="en">
        <body>
          <main>
            <div className="text-base font-normal">
              <div className="mx-5 px-20">
                <Header />
              </div>
              <br />
              <div className="mx-5 px-20">{children}</div>
              <div className="mx-5 px-20">{/* <Footer /> */}</div>
            </div>
          </main>
        </body>
      </html>
    </NuqsAdapter>
  );
};

export default RootLayout;
