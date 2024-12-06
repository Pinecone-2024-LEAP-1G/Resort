"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Header from "@/components/Header/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const BecomeHostPage = pathName.startsWith("/become-host");
  return (
    <SessionProvider>
      <NuqsAdapter>
        <html lang="en">
          <body>
            <main>
              <div className="text-base font-normal">
                <div className="mx-5 px-20">
                  {!BecomeHostPage && <Header />}
                </div>
                <br />
                <div className="mx-5 px-20">{children}</div>
                <Toaster />
                <div className="mx-5 px-20">
                  {!BecomeHostPage && <Footer />}
                </div>
              </div>
            </main>
          </body>
          {/* <Toaster /> */}
        </html>
      </NuqsAdapter>
    </SessionProvider>
  );
};

export default RootLayout;
