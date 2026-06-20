'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'system' | 'light'>('system');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'system' | 'light') || 'system';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'system' ? 'light' : 'system';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="neu-btn px-4 py-2.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white flex items-center gap-2"
      title={theme === 'system' ? 'Switch to Light Theme' : 'Switch to System Theme'}
    >
      {theme === 'system' ? (
        <>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Theme: System
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Theme: Light (White)
        </>
      )}
    </button>
  );
}
