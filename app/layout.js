import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "D S Channappa | Full Stack Developer",
  description: "Portfolio of D S Channappa - Full Stack Developer specializing in React, Node.js, and Blockchain technology",
  keywords: "Full Stack Developer, React, Node.js, Blockchain, JavaScript, Portfolio",
  authors: [{ name: "D S Channappa" }],
  openGraph: {
    title: "D S Channappa | Full Stack Developer",
    description: "Portfolio of D S Channappa - Full Stack Developer specializing in React, Node.js, and Blockchain technology",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
