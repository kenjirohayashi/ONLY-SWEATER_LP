import { Inter } from '@next/font/google'
import { About } from '@/components/About'
import Head from 'next/head'
import { Contact } from '@/components/Contact'
import { Gallery } from '@/components/Gallery'
import { Info } from '@/components/Info'
import { Items } from '@/components/Items'
import { Top } from '@/components/Top'
import { Footer } from '@/components/commons/Footer'
import { Header } from '@/components/commons/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Top />
        <About />
        <Items />
        <Info />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
