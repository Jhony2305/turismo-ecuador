import {setRequestLocale} from 'next-intl/server';
import Hotels from '@/components/Hotels';

export default async function HotelsPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="w-full">
      <Hotels />
    </main>
  );
}
