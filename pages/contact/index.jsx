import Head from 'next/head'
import Link from 'next/link'

import { Navbar } from '../../components/Navbar'
import { MainLayaout } from '@/components/layaouts/MainLayaout'

export default function ContactPage() {
  return (
    <MainLayaout>
        <h1>Contact Page</h1>
       
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>
    </MainLayaout>
  )
}