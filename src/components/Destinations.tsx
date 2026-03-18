'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {destinations} from '@/data/destinations';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  const t = useTranslations('Destinations');
  const tHome = useTranslations('HomePage');

  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-brand-blue-dark mb-4"
          >
            {tHome('destinations')}
          </motion.h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300 relative"
            >
              <div className="aspect-[4/5] overflow-hidden relative bg-slate-200">
                <img 
                  src={dest.image} 
                  alt={t(`${dest.id}.name`)} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white/95 text-xs font-semibold tracking-wide shadow-sm">
                    {t(`${dest.id}.tag`)}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full z-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-brand-green" />
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{t(`${dest.id}.name`)}</h3>
                  </div>
                  <p className="text-slate-200 text-sm mb-6 line-clamp-2 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    {t(`${dest.id}.description`)}
                  </p>
                  <a href={`#tour-${dest.id}`} className="inline-flex items-center w-max gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/20 group-hover:bg-brand-green group-hover:border-brand-green group-hover:shadow-[0_8px_20px_-6px_var(--color-brand-green)] transform group-hover:-translate-y-1 delay-100">
                    {t('view_plans')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
