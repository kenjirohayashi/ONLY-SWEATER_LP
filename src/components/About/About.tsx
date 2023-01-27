import Image from 'next/image'
import React from 'react'
import ViewMore from '../commons/ViewMore/ViewMore'
import styles from './About.module.scss'

const About = () => {
  return (
    <section id='about' className={styles.section}>
      <div className={styles['images-container']}>
        <div>
          <Image
            src='/assets/sleeve_knitting_sweater.png'
            width={455.75}
            height={608}
            alt={'ONLY SWEATER'}
          />
        </div>
        <div className={styles['poncho-sweater']}>
          <Image
            src='/assets/poncho_sweater_tall.png'
            width={455.75}
            height={608}
            alt={'ONLY SWEATER'}
          />
        </div>
      </div>
      <section className={styles.content}>
        <span className={styles.circle}></span>
        <h2 className={styles['content-title']}>About</h2>
        <div className={styles['content-description']}>
          <p className={styles['content-body']}>
            着るだけで心が満たされていくそんなセーターを作るために
            <br />
            セーターだけを販売するOnlySweaterを立ち上げました。
          </p>
          <p className={styles['content-body']}>
            冬の季節にしか着ないセーターだけれど、
            <br />
            少しこだわるだけで今年の冬を特別なものにしてもらえるように
            <br />
            細部までこだわって作りました。
          </p>
          <p className={styles['content-body']}>あなたの冬が特別なものになりますように...</p>
        </div>
        <div className={styles.link}>
          <ViewMore href={'#'} title={'ONLY SWEATERについて・・・'} rel={'help'} />
        </div>
      </section>
    </section>
  )
}

export default About
