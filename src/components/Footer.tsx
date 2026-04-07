import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Footer() {
  const tHome = useTranslations('HomePage');
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-black tracking-tighter text-white">
              Ecu<span className="text-brand-green">Tours</span>
            </span>
          </Link>
          <p className="text-slate-400 max-w-sm">
            {tHome('subtitle')}
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{t('links')}</h3>
          <ul className="space-y-3">
            <li><Link href="/#about" className="hover:text-brand-blue transition">{tHome('about')}</Link></li>
            <li><Link href="/#destinations" className="hover:text-brand-blue transition">{tHome('destinations')}</Link></li>
            <li><Link href="/tours" className="hover:text-brand-blue transition">{tHome('tours')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{tHome('contact')}</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-slate-400">
              <span className="text-brand-warm">📍</span> Quito, Ecuador
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <span className="text-brand-warm">📧</span> info@ecutours.com
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <span className="text-brand-warm">📞</span> +593 99 123 4567
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} EcuTours. {t('rights')}</p>
      </div>
    </footer>
  );
}
