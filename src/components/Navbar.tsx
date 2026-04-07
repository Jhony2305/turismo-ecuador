'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import {useState} from 'react';
import {Menu, X} from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('HomePage');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-brand-blue">
              Ecu<span className="text-brand-green">Tours</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-slate-700 hover:text-brand-blue font-medium transition">
              {t('about')}
            </Link>
            <Link href="/#destinations" className="text-slate-700 hover:text-brand-blue font-medium transition">
              {t('destinations')}
            </Link>
            <Link href="/hotels" className="text-slate-700 hover:text-brand-blue font-medium transition">
              {t('hotels')}
            </Link>
            <Link href="/tours" className="text-slate-700 hover:text-brand-blue font-medium transition">
              {t('tours')}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/#contact" className="px-6 py-2.5 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue-dark transition shadow-lg shadow-brand-blue/20">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md border border-slate-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 p-4 shadow-xl z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-slate-50 rounded-lg">
              {t('about')}
            </Link>
            <Link href="/#destinations" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-slate-50 rounded-lg">
              {t('destinations')}
            </Link>
            <Link href="/hotels" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-slate-50 rounded-lg">
              {t('hotels')}
            </Link>
            <Link href="/tours" onClick={() => setIsOpen(false)} className="text-slate-700 font-medium px-4 py-3 hover:bg-slate-50 rounded-lg">
              {t('tours')}
            </Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="mx-4 text-center px-6 py-4 rounded-xl bg-brand-blue text-white font-bold shadow-lg shadow-brand-blue/20">
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
