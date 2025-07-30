"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 p-3 bg-gray-800 dark:bg-gray-200 text-yellow-400 dark:text-gray-800 rounded-full shadow-lg w-12 h-12"></div>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 z-50 p-3 bg-gray-800 dark:bg-gray-200 text-yellow-400 dark:text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </motion.button>
  );
}
