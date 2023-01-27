import Image from 'next/image'
import React, { FC } from 'react'
import styles from './ItemCard.module.scss'

type Props = {
  src: string
  alt: string
  itemName: string
  price: number
}

const ItemCard: FC<Props> = (props) => {
  const { src, alt, itemName, price } = props
  return (
    <div className={styles['item-card-container']}>
      <Image src={src} width={272} height={218.78} alt={alt} />
      <ul className={styles['color-options']}>
        <li className={styles['color-options-item']}></li>
        <li className={styles['color-options-item']}></li>
        <li className={styles['color-options-item']}></li>
        <li className={styles['color-options-item']}></li>
        <li className={styles['color-options-item']}></li>
      </ul>
      <h3 className={styles['item-name']}>{itemName}</h3>
      <p className={styles['item-price']}>￥{price}</p>
    </div>
  )
}

export default ItemCard
