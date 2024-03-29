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
            "Para garantir a precisão no cálculo de fatores e na medição de
            absorbâncias, é essencial adotar o ponto (.) como separador decimal,
            conforme o padrão americano. Essa prática assegura a correta
            inserção e interpretação dos dados nos softwares dos equipamentos,
            evitando erros e inconsistências."
          </p>

          <Calculator />
        </div>
      </section>
    </main>
  );
}
