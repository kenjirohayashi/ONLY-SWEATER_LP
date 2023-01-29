import React, { FC } from 'react'
import styles from './Button.module.scss'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  // onClick: (event: MouseEvent) => void;
  children: string
  style?: React.CSSProperties
}

const Button: FC<Props> = (props) => {
  const { type, children, style } = props
  return (
    <button type={type} className={styles.button} style={style}>
      {children}
    </button>
  )
}

export default Button
