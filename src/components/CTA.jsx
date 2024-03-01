import styles from '../style'
import Button  from './Button'
import React from 'react'

const CTA = () => {
  return (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
    bg-black-gradient  sm:flex-row  flex-col rounded-[20px] box-shadow `}  >

        <div className='flex-1 flex flex-col'>
         <h2 className={styles.heading2}>Let’s try our service now!</h2>
         <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
        </div>

   </section>
  )
}

export default CTA