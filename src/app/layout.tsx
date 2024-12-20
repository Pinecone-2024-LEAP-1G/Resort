"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Header from "@/components/Header/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { Suspense } from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const BecomeHostPage = pathName.startsWith("/become-host");
  const GooglePage = pathName.startsWith("/signin");
  const HostReservations = pathName.startsWith("/hostReservations");
  const hostProperty = pathName.startsWith("/hostProperty");
  const orderDetail = pathName.startsWith("/orderDetail");
  return (
    <Suspense>
      <SessionProvider>
        <NuqsAdapter>
          <html lang="en">
            <body>
              <main className="w-full">
                <div className="text-base font-normal">
                  {!BecomeHostPage && !GooglePage && <Header />}
                  <br />
                  <div
                    className={`mx-auto px-20 ${!BecomeHostPage ? "pt-32" : ""}`}
                  >
                    {children}
                  </div>
                  <Toaster />
                  <div className="">
                    {!BecomeHostPage &&
                      !GooglePage &&
                      !HostReservations &&
                      !hostProperty &&
                      !orderDetail && <Footer />}
                  </div>
                </div>
              </main>
            </body>
          </html>
        </NuqsAdapter>
      </SessionProvider>
    </Suspense>
  );
};

export default RootLayout;
