'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import { MessageCircle, Mail, Send } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');
  const tHome = useTranslations('HomePage');

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-blue/5 -skew-y-3 origin-top-left z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-brand-blue-dark mb-4"
          >
            {tHome('contact')}
          </motion.h2>
          <div className="w-24 h-1 bg-brand-warm mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">{t('ready')}</h3>
            <p className="text-slate-600 mb-8 text-lg">
              {t('ready_desc')}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{t('email')}</p>
                  <p>reservas@ecutours.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p>+593 99 123 4567</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/593991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition shadow-lg hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              {t('chat')}
            </a>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('form_name_label')}</label>
                <input type="text" className="w-full px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition" placeholder={t('form_name_placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('form_email_label')}</label>
                <input type="email" className="w-full px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition" placeholder={t('form_email_placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('form_msg_label')}</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition" placeholder={t('form_msg_placeholder')}></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-blue-dark transition shadow-lg hover:-translate-y-0.5">
                <Send className="w-5 h-5" />
                {t('form_submit')}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
