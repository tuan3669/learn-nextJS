import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { Children } from 'react'

interface AdminLayout {}

export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Admin layout</h1>
      <Link href={''}>Home</Link>
      <Link href={'/about'}>About</Link>
      <div>{children}</div>
      <div>sideBar</div>
    </div>
  )
}
