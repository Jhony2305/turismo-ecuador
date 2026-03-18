'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, HeartPulse } from 'lucide-react';

export default function About() {
  const t = useTranslations('About');
  const tHome = useTranslations('HomePage');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-blue-dark mb-6 tracking-tight drop-shadow-sm"
          >
            {t('title')}
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed italic">
            "{t('description')}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl text-center border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
          >
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{t('experts_title')}</h3>
            <p className="text-slate-600">{t('experts_desc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl text-center border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
          >
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{t('security_title')}</h3>
            <p className="text-slate-600">{t('security_desc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl text-center border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
          >
            <div className="w-16 h-16 bg-brand-warm/10 text-brand-warm hover:text-brand-warm-hover transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartPulse className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{t('unique_title')}</h3>
            <p className="text-slate-600">{t('unique_desc')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-black text-slate-800 mb-6 drop-shadow-sm">{t('cta')}</p>
          <a href="#destinations" className="inline-block px-10 py-4 bg-slate-900 text-white font-extrabold rounded-xl hover:bg-brand-blue transition shadow-xl hover:-translate-y-1">
            {t('cta_button')}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
