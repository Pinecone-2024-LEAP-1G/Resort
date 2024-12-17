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
  return (
    <Suspense>
      <SessionProvider>
        <NuqsAdapter>
          <html lang="en">
            <body>
              <main
                className="w-full"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  boxShadow: " inset 0 0 0 1000px rgba(135,206,235,.6)",
                  backgroundBlendMode: "color-dodge",
                }}
              >
                <div className="text-base font-normal">
                  {!BecomeHostPage && <Header />}
                  <br />
                  <div className="mx-5 px-20">{children}</div>
                  <Toaster />
                  <div className="mx-5 px-20">
                    {!BecomeHostPage && <Footer />}
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
