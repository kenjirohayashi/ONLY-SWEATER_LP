import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@/images/facebook.svg'
import styles from './Footer.module.scss'
import InstagramIcon from '@/images/instagram.svg'

const Footer = () => {
  return (
    <article className={styles['footer-container']}>
      <footer className={styles.footer}>
        <div className={styles['image-container']}>
          <Image src='/assets/logo.png' alt={'ONLY SWEATER'} width={238} height={190} />
          <div className={styles['image-caption']}>We sell only sweaters</div>
        </div>
        <ul className={styles['link-container']}>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Items</Link>
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
          <li>
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
          </li>
        </ul>
        <address className={styles.address}>
          Tel: 0312345678
          <br />
          Email: onlysweater@jp.com
        </address>
      </footer>
      <div className={styles.copyright}>
        <small>2022@only sweater</small>
      </div>
    </article>
  )
}

export default Footer
