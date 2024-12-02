"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Header from "@/components/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
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
                <div className="mx-5 px-20">
                  <Toaster />
                  <Footer />
                </div>
              </div>
            </main>
          </body>
        </html>
      </NuqsAdapter>
    </SessionProvider>
  );
};

export default RootLayout;
