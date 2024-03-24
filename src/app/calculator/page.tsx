'use client';

import Head from 'next/head';
import * as React from 'react';

import Calculator from '@/app/calculator/Calculator/Calculator';

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
          <h1 className='mt-4'>Calculadora de Fator e Absorbância</h1>
          <p className='mt-2 text-sm text-gray-800'>
            "Uma metodologia eficaz para calcular fatores e medir absorbâncias
            com precisão. É importante destacar a necessidade de utilizar o
            ponto (.) como separador decimal, seguindo o padrão americano, em
            detrimento da vírgula, para garantir clareza e precisão nos dados
            matemáticos apresentados."
          </p>

          <Calculator />
        </div>
      </section>
    </main>
  );
}
