import { useState } from "react";
import Head from "next/head";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Advanced portfolio website" />
      </Head>
      <main className="bg-black text-white min-h-screen">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 bg-gray-800 rounded-lg"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        {children}
      </main>
    </div>
  );
}