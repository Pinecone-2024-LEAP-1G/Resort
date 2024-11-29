"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Header from "@/components/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  connectToMongoDB();
  const pathName = usePathname();
  const BecomeHostPage = pathName.startsWith("/become-host");
  return (
    <NuqsAdapter>
      <html lang="en">
        <body>
          <main>
            <div className="text-base font-normal">
              <div className="mx-5 px-20">{!BecomeHostPage && <Header />}</div>
              <br />
              <div className="mx-5 px-20">{children}</div>
              <div className="mx-5 px-20">{!BecomeHostPage && <Footer />}</div>
            </div>
          </main>
        </body>
      </html>
    </NuqsAdapter>
  );
};

export default RootLayout;
