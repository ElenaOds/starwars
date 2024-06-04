'use client';

import React from 'react';
import clsx from 'clsx';


export default function ErrorComponent({ error, reset }) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <button onClick={() => reset()}
       className='py-2.5 px-5 bg-blue-500 text-white text-base text-center font-medium rounded'>
        Try again
        </button>
    </div>
  );
}