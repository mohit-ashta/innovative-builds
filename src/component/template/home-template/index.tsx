import React from 'react'

import Link from 'next/link'
import { lusitana } from '@/component/atoms/fonts'

export const HomeTemplate = () => {
  return (
    <p
    className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
  >
    <strong>Welcome to Acme.</strong> This is the example for the{' '}
    <Link href="/dashboard" className="text-blue-500">
    go dashboard
    </Link>
    , brought to you by Vercel.
  </p>
  )
}