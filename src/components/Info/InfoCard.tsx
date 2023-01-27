import React, { FC } from 'react'
import styles from './InfoCard.module.scss'
import InfoDetail from '@/images/info-detail.svg'

type Props = {
  title: string
  date: string
}

const InfoCard: FC<Props> = (props) => {
  const { title, date } = props

  return (
    <div className={styles['content-container']}>
      <div className={styles['content-body']}>
        <dt className={styles['info-title']}>{title}</dt>
        <dd className={styles['info-date']}>{date}</dd>
      </div>
      <InfoDetail className={styles['info-detail']} />
    </div>
  )
}

export default InfoCard
