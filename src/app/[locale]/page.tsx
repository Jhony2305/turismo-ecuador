import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import Hotels from '@/components/Hotels';
import Tours from '@/components/Tours';
import Contact from '@/components/Contact';

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Destinations />
      <Tours />
      <Hotels />
      <Contact />
    </main>
  );
}
