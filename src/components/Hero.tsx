'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Image - Premium Ecuador Landscape */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
          alt="Ecuador Landscape" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Elegant Gradient Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-warm/20 text-white backdrop-blur-md border border-white/20 font-semibold tracking-widest text-sm mb-6 shadow-xl uppercase">
            {t('badge')}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
            {t('title')}
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-slate-200 max-w-3xl mx-auto font-light mb-12 drop-shadow-md"
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="#destinations" className="px-10 py-4 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green-dark transition shadow-[0_0_30px_-5px_var(--color-brand-green)] hover:-translate-y-1 text-lg">
            {t('destinations')}
          </a>
          <a href="#tours" className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition shadow-xl hover:-translate-y-1 text-lg">
            {t('tours')}
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}
