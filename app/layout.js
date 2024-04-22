import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
const inter = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Quotify",
  description: "Share your quotes to a larger audience",
  icons: {
    icon: "/favicon.ico",
    sizes: "128x128"
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <Toaster position="top-center"/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
