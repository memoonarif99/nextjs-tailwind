import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeRegistry } from "@app/theme";
import { AuthProvider } from "@app/contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

import "./globals.css";
