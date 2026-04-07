'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '@/data/tours';
import { Clock, CheckCircle2, XCircle, ChevronRight, MapPin, Activity, Bed, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Tours() {
  const t = useTranslations('Tours');
  const tHome = useTranslations('HomePage');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [activeRegion, setActiveRegion] = useState('all');

  useEffect(() => {
    const region = searchParams.get('region');
    if (region && ['galapagos', 'costa', 'sierra', 'oriente'].includes(region)) {
      setActiveRegion(region);
    }
  }, [searchParams]);

  const filteredTours = activeRegion === 'all' 
    ? tours 
    : tours.filter(t => t.destinationId === activeRegion);

  const getPriceText = (price: number) => {
    const formattedPrice = price.toLocaleString('en-US');
    return t('price_from', { price: formattedPrice });
  };
  const priceNote = t('price_note');

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedTour) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedTour]);

  return (
    <section id="tours" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-brand-blue-dark mb-4"
          >
            {tHome('tours')}
          </motion.h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['all', 'galapagos', 'costa', 'sierra', 'oriente'].map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeRegion === region
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:scale-105 border border-slate-200'
              }`}
            >
              {t(`filter_${region}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour, index) => (
              <motion.div
                layout
                id={`tour-${tour.id}`}
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition border border-slate-100 flex flex-col md:flex-row scroll-mt-24"
            >
              <div className="md:w-5/12 h-64 md:min-h-full overflow-hidden relative bg-slate-200 shrink-0">
                <Image
                  src={tour.image}
                  alt={t(`${tour.id}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-brand-blue mb-3 font-bold tracking-wide uppercase text-sm">
                  <Clock className="w-4 h-4" />
                  {t(`${tour.id}.duration`)}
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">{t(`${tour.id}.name`)}</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green font-bold text-sm rounded-lg border border-brand-green/20">
                    {getPriceText(tour.price)}
                  </span>
                </div>
                <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                  {t(`${tour.id}.description`)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" /> {t('includes')}
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {(t.raw(`${tour.id}.inclusions`) as string[]).slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                      <XCircle className="w-4 h-4 text-red-400" /> {t('excludes')}
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {(t.raw(`${tour.id}.exclusions`) as string[]).slice(0, 3).map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="mt-auto inline-flex items-center justify-center gap-2 py-4 px-8 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-blue transition shadow-lg hover:-translate-y-1 w-full sm:w-auto self-start"
                >
                  {t('view_detail')}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedTour(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-48 sm:h-64 shrink-0">
                <Image
                  src={selectedTour.image}
                  alt={t(`${selectedTour.id}.name`)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur text-white rounded-full flex items-center justify-center transition z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-brand-green mb-3 font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-md">
                    <Clock className="w-4 h-4" />
                    {t(`${selectedTour.id}.duration`)}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 drop-shadow-lg">{t(`${selectedTour.id}.name`)}</h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/40 text-white font-bold shadow-xl text-sm sm:text-base tracking-wide">
                      {getPriceText(selectedTour.price)}
                    </span>
                    <span className="inline-block bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white/95 text-xs sm:text-sm font-medium italic border border-white/10 shadow-sm">
                      {priceNote}
                    </span>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8 flex-1 bg-slate-50/50">
                <div className="bg-white border-l-4 border-brand-blue p-6 sm:p-8 rounded-2xl shadow-sm mb-10">
                  <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed italic">
                    "{t(`${selectedTour.id}.description`)}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <MapPin className="text-brand-blue" />
                      {t('modal_itinerary')}
                    </h3>
                    <div className="space-y-6">
                      {(t.raw(`${selectedTour.id}.itinerary`) as any[]).map((dayData, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
                              {t('day_prefix')}{dayData.day}
                            </div>
                            {i < (t.raw(`${selectedTour.id}.itinerary`) as any[]).length - 1 && (
                              <div className="w-0.5 h-full bg-slate-100 my-2" />
                            )}
                          </div>
                          <div className="pb-2">
                            <h4 className="font-bold text-slate-800">{dayData.title}</h4>
                            <p className="text-slate-600 text-sm mt-1">{dayData.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Bed className="text-brand-warm w-5 h-5" />
                        {t('modal_lodging')}
                      </h3>
                      <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {t(`${selectedTour.id}.lodging`)}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Activity className="text-brand-green w-5 h-5" />
                        {t('modal_activities')}
                      </h3>
                      <ul className="text-sm text-slate-600 space-y-2">
                        {(t.raw(`${selectedTour.id}.activities`) as string[]).map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-green mt-1">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" /> {t('includes')}
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {(t.raw(`${selectedTour.id}.inclusions`) as string[]).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                      <XCircle className="w-5 h-5 text-red-400" /> {t('excludes')}
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {(t.raw(`${selectedTour.id}.exclusions`) as string[]).map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row gap-6 items-center justify-between shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] z-10">
                <p className="text-lg text-slate-800 font-black text-center md:text-left tracking-tight">
                  {t('ready_experience')}
                </p>
                <div className="flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition text-center"
                  >
                    {t('close')}
                  </button>
                  <a
                    href={`https://wa.me/593991234567?text=${t('whatsapp_text')} ${t(`${selectedTour.id}.name`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-extrabold rounded-xl hover:bg-[#20bd5a] transition shadow-xl shadow-[#25D366]/30 hover:-translate-y-1"
                  >
                    <MessageCircle className="w-6 h-6" />
                    {t('whatsapp_inquire')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
