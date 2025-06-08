import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trackify | Expense Tracker and Management System",
  description:
    "Trackify is a robust expense tracking and management tool designed to simplify financial oversight for individuals and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* ✅ Add PWA-related tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} min-h-screen dark:bg-[#09090a]`}>
        {children}
      </body>
    </html>
  );
}
