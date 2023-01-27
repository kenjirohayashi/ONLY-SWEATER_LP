import Link from 'next/link'
import React, { FC } from 'react'
import styles from './HamburgerNav.module.scss'
import FacebookIcon from '@/images/facebook.svg'
import InstagramIcon from '@/images/instagram.svg'

type Props = {
  id: string
  ariaHidden: boolean
}

const HamburgerNav: FC<Props> = (props) => {
  const { id, ariaHidden } = props

  return (
    <nav id={id} className={styles.nav} aria-hidden={ariaHidden}>
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
      <address className={styles.address}>
        Tel: 0312345678
        <br />
        Email: onlysweater@jp.com
      </address>
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
  )
}

export default HamburgerNav
