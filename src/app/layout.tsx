"use server";

import { connectToMongoDB } from "@/lib/db";
import "./globals.css";
import Header from "@/components/Header";
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  connectToMongoDB();
  return (
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
  );
};

export default RootLayout;
