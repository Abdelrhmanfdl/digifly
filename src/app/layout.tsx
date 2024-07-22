import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/[locale]/globals.css";
import StoreProvidor from "./providors/StoreProvidor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digifly Assesment",
  description: "Digifly Assesment",
  icons: ["/images/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className + "relative m-auto"}>
        <StoreProvidor>{children}</StoreProvidor>
      </body>
    </html>
  );
}
