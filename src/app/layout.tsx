import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/[locale]/globals.css";
import StoreProvidor from "./providors/StoreProvidor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digifly Assesment",
  description: "Digifly Assesment",
  icons: ["../logo.png"],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <StoreProvidor>
        <body className={inter.className + "relative m-auto"}>{children}</body>
      </StoreProvidor>
    </html>
  );
}
