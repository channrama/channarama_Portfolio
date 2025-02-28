import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar"; // Import Navbar


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Advanced portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
       {/* Navbar at the top */}
        <main className="min-h-screen">{children}</main> {/* Page content */}
       
      </body>
    </html>
  );
}
