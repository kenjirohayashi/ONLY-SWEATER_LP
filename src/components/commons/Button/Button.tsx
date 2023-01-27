import React, { FC } from 'react'
import styles from './Button.module.scss'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  // onClick: (event: MouseEvent) => void;
  children: string
}

const Button: FC<Props> = (props) => {
  const { type, children } = props
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
