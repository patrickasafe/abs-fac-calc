'use client';

import Head from 'next/head';
import * as React from 'react';

import AboutMeCard from '@/components/cards/AboutMeCard';

import Calculator from '@/app/components/Calculator/Calculator';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Calculator</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          {' '}
          <h1 className='my-4'>Calculadora de Fator e Absorbância</h1>
          <Calculator />
          <AboutMeCard />
        </div>
      </section>
    </main>
  );
}
