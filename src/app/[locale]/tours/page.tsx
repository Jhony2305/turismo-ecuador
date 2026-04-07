import {setRequestLocale} from 'next-intl/server';
import Tours from '@/components/Tours';
import { Suspense } from 'react';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'HomePage'});
  
  return {
    title: `EcuTours | ${t('tours')}`,
    description: t('subtitle'),
  };
}

export default async function ToursPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="w-full">
      <Suspense fallback={null}>
        <Tours />
      </Suspense>
    </main>
  );
}
