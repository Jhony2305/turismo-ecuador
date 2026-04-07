import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import Contact from '@/components/Contact';

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Destinations />
      <Contact />
    </main>
  );
}
