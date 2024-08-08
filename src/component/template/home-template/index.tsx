import React from 'react'

import Link from 'next/link'
import { lusitana } from '@/component/atoms/fonts'

export const HomeTemplate = () => {
  return (
    <p
    className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
  >
    <strong>Welcome to Construction</strong> 
    <Link href="/dashboard" className="ml-3 text-blue-500">
    go dashboard
    </Link>
    
  </p>
  )
}