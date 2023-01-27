import React, { FC } from 'react'
import styles from './HamburgerButton.module.scss'

type Props = {
  value: boolean
  onChange: (value: boolean) => void
}

const Hamburger: FC<Props> = React.memo((props) => {
  const { value, onChange } = props

  const handleChange = () => {
    onChange(!value)
  }
  return (
    <div className={styles.container}>
      <input type='checkbox' className={styles.hamburger} onChange={handleChange} />
      <div className={styles['span-container']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
})

export default Hamburger
