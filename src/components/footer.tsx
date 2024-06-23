import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { ToggleTheme } from './toggle-theme';

export default function Footer() {
  return (
    <footer className="bg-muted py-4 px-6 fixed bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="flex flex-row items-center">
        <Link
          href="https://github.com/gustavohariel"
          target="_blank"
          className="inline-flex items-center"
        >
          <GitHubLogoIcon className="w-6 h-6 mr-2" />
          <span className="text-sm font-medium">Made by Gustavo Hariel</span>
        </Link>
        <span className="pl-1 pb-1">
          <ToggleTheme />
        </span>
      </div>
    </footer>
  );
}
