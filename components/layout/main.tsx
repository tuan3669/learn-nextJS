import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { Children, useEffect } from 'react'

interface MainLayout {}

export const MainLayout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log('mout main layouyt')
    return () => {
      console.log('ount mout main')
    }
  }, [])

  return (
    <div>
      <h1>main layout</h1>
      <Link href={''}>Home</Link>
      <Link href={'/about'}>About</Link>
      <div>{children}</div>
    </div>
  )
}
