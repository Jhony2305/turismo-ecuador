'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {hotels} from '@/data/hotels';
import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hotels() {
  const t = useTranslations('Hotels');
  const tHome = useTranslations('HomePage');

  return (
    <section id="hotels" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-brand-blue-dark mb-4"
          >
            {tHome('hotels')}
          </motion.h2>
          <div className="w-24 h-1 bg-brand-warm mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition flex flex-col"
            >
              <div className="h-64 overflow-hidden relative w-full block">
                <Image 
                  src={hotel.image} 
                  alt={t(`${hotel.id}.name`)} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 fill-brand-warm text-brand-warm" />
                  <span className="font-bold text-slate-800">{hotel.stars}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {t(`${hotel.id}.location`)}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{t(`${hotel.id}.name`)}</h3>
                <p className="text-slate-600 line-clamp-3">
                  {t(`${hotel.id}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
