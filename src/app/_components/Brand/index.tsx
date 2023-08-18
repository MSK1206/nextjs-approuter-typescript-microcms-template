import { BrandName } from '@/app/_Meta/Titles'
import styles from './index.module.css'
import Image from 'next/image'

export default function Brand() {
  return (
    <div className={styles.brand}>
      <Image
        src={'/rebirth.svg'}
        alt={`${BrandName} Logo`}
        className={styles.brandimg}
        width={40}
        height={40}
      />
      <span className={styles.brandname}>{BrandName}</span>
    </div>
  )
}
