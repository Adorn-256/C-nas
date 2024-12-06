'use client';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Brain } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline">C-NAS</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Analysis
          </Link>
          <Link href="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Chat
          </Link>
          <Link href="/upload" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Upload
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}