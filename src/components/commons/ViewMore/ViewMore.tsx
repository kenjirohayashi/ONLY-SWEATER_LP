import Link from 'next/link'
import React, { FC } from 'react'
import styles from './ViewMore.module.scss'

type Props = {
  href: string
  title: string
  rel: HTMLAnchorElement['rel']
}

const ViewMore: FC<Props> = (props) => {
  const { href, title, rel } = props
  return (
    <div className={styles.container}>
      <Link href={href} title={title} rel={rel} className={styles.link}>
        View more →
      </Link>
      <div className={styles.underline}></div>
    </div>
  )
}

export default ViewMore
