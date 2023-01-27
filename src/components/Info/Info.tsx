import React from 'react'
import ViewMore from '../commons/ViewMore/ViewMore'
import styles from './Info.module.scss'
import InfoCard from './InfoCard'

const Info = () => {
  return (
    <section id='info' className={styles.section}>
      <h2 className={styles['section-title']}>Info</h2>
      <dl className={styles['info-container']}>
        <InfoCard title={'2022ウィンターコレクション発表のお知らせ'} date={'2022/10/01'} />
        <InfoCard title={'2022ウィンターコレクション発表のお知らせ'} date={'2022/10/01'} />
        <InfoCard title={'2022ウィンターコレクション発表のお知らせ'} date={'2022/10/01'} />
      </dl>
      <div className={styles.link}>
        <ViewMore href={''} title={'ONLY SWEATERのニュース'} rel={'help'} />
      </div>
    </section>
  )
}

export default Info
