import Image from 'next/image'
import React from 'react'
import { BREAKPOINT } from '@/constants/breakpoints'
import styles from './Gallery.module.scss'
import { useWindow } from '@/hooks/useWindow'

const Gallery = () => {
  const { height, width } = useWindow()

  return (
    <section id='gallery' className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles['log-container']}>
        <Image src='/assets/logo.png' alt={'ONLY SWEATERのロゴ'} width='449' height='361' />
      </div>
      <div className={styles['gallery-image-container']}>
        {width > BREAKPOINT.sm ? (
          <Image src='/assets/gallery__pc.png' alt={'ONLY SWEATER ギャラリー'} fill />
        ) : (
          <Image src='/assets/gallery__sp.png' alt={'ONLY SWEATER ギャラリー'} fill />
        )}
      </div>
    </section>
  )
}

export default Gallery
