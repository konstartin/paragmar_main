import React from 'react'
import styles from './QuestionAnswer.module.css'

export default function QuestionAnswer({ index, answer }) {
  return (
    <div className={styles.container}>
      <span className={styles.index}>{index}</span>
      <span className={styles.answer}>{answer}</span>
    </div>
  )
}
