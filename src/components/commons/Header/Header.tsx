import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useCallback, useState } from 'react'
import { HamburgerButton, HamburgerNav } from '../Hamburger'
import FacebookIcon from '@/images/facebook.svg'
import InstagramIcon from '@/images/instagram.svg'
import styles from './Header.module.scss'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = useCallback((value: boolean) => {
    const body = document.getElementById('body')
    if (value) {
      body?.classList.add(styles['scroll-prevent']) //背景固定のCSSを付与
    } else {
      body?.classList.remove(styles['scroll-prevent'])
    }
    setIsOpen(value)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles['image-container']}>
        <div className={styles.image}>
          <Image src='/assets/header-logo.png' alt={'ONLY SWEATER'} width={179} height={36} />
        </div>
        <div className={styles['image-caption']}>We sell only sweaters</div>
      </div>
      <HamburgerButton
        value={isOpen}
        onChange={handleChange}
        aria-expanded={isOpen}
        aria-controls='panel-nav'
      />
      <HamburgerNav id='panel-nav' ariaHidden={isOpen} />
      <nav className={styles.nav}>
        <ul className={styles['page-list']}>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Item</Link>
          </li>
          <li>
            <Link href='/'>Shop</Link>
          </li>
          <li>
            <Link href='/'>Info</Link>
          </li>
          <li>
            <Link href='/'>Press</Link>
          </li>
        </ul>
        <ul className={styles['sns-list']}>
          <li>
            <Link href=''>
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FacebookIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
