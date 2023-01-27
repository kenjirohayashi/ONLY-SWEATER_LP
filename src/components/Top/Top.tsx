import Image from 'next/image'
import React from 'react'
import styles from './Top.module.scss'

const Top = () => {
  return (
    <section id='top' className={styles.section}>
      <div className={styles.container}>
        <div className={styles['poncho-sweater']}>
          <Image src='/assets/mask_circle.png' alt={'ポンチョニット'} width={496} height={585} />
        </div>
        <div className={styles['logo-container']}>
          <Image src='/assets/logo.png' alt={'ONLY SWEATER'} width={476} height={376} />
        </div>
        <div className={styles['flower-sweater']}>
          <Image src='/assets/flower_sweater.png' alt={'花模様のニット'} fill />
        </div>
        <div className={styles['sleeve-knitting-sweater']}>
          <Image
            src='/assets/mask_triangle.png'
            alt={'袖編み込みニット'}
            width={471}
            height={636}
          />
        </div>
      </div>
      <div className={styles.notice}>
        <p>新規登録で１０％オフキャンペーン実施中！</p>
      </div>
    </section>
  )
}

export default Top
