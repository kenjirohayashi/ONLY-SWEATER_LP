import React from 'react'
import { Button } from '../commons/Button'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section id='contact' className={styles.section}>
      <h2 className={styles['section-title']}>Contact</h2>
      <form className={styles['form-wrapper']}>
        <div className={styles['form-name-container']}>
          <div className={styles['form-content']}>
            <label htmlFor='familyName'>姓</label>
            <input
              type='text'
              name='familyName'
              id='familyName'
              autoComplete='family-name'
              placeholder='例）山田'
            />
          </div>
          <div className={styles['form-content']}>
            <label htmlFor='givenName'>名</label>
            <input
              type='text'
              name='givenName'
              id='givenName'
              autoComplete='given-name'
              placeholder='例）太郎'
            />
          </div>
        </div>
        <div className={styles['form-content']}>
          <label htmlFor='email'>メールアドレス</label>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='email'
            placeholder='例）yamada@email.com'
          />
        </div>
        <div className={styles['form-content']}>
          <label htmlFor='content'>お問い合わせ内容</label>
          <input type='textarea' name='content' id='content' style={{ height: '193px' }} />
        </div>
        <Button type={'submit'} style={{ border: 'none'}}>送信</Button>
      </form>
    </section>
  )
}

export default Contact
