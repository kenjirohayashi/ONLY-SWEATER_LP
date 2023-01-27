import React, { use, useState } from 'react'
import ViewMore from '../commons/ViewMore/ViewMore'
import Arrow from '@/images/arrow.svg'
import ItemCard from './ItemCard'
import type { Item } from '@/types/item'
import styles from './Items.module.scss'
import { initialData } from '@/types/item'

const Items = () => {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<Item[]>(initialData) //ほんまはserversideでfetchするイメージ

  // const handleClickRight = () => {
  //   setCount(count => count + 1);
  //   const newItems = propsItems.slice(count, count + 3);
  //   setItems(newItems)
  // }

  // const handleClickLeft = () => {
  //   setCount(count => count - 1);
  //   const newItems = propsItems.slice(count, count + 3);
  //   setItems(newItems)
  // }

  return (
    <section id='items' className={styles.section}>
      <h2 className={styles['section-title']}>Items</h2>
      <div className={styles['main-container']}>
        <Arrow className={styles.arrow} />
        <div className={styles['items-container']}>
          {items.map((item) => {
            return (
              <>
                <ItemCard src={item.url} alt={item.alt} itemName={item.name} price={item.price} />
              </>
            )
          })}
        </div>
        <Arrow style={{ transform: 'rotate(180deg)' }} className={styles.arrow} />
      </div>
      <div className={styles['dots-list']}>
        <span className={styles['dots-item']}></span>
        <span className={styles['dots-item']}></span>
        <span className={styles['dots-item']}></span>
      </div>
      <div className={styles.link}>
        <ViewMore href={''} title={'ONLY SWEATER オンラインショップ'} rel={'help'} />
      </div>
    </section>
  )
}

export default Items
