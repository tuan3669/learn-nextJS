import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { Children } from 'react'

interface MainLayout {}

export const EmptyLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>EmptyLayout layout</h1>
      <div>{children}</div>
    </div>
  )
}
