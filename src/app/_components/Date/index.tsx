import { formatDate } from '@/app/_libs/utils'
import { ClockIcon } from '@heroicons/react/24/outline'
import styles from './index.module.css'

type Props = {
  date: string
}

export default function PublishedDate({ date }: Props) {
  return (
    <span className={styles.publishDate}>
      <ClockIcon className={styles.clockIcon} />
      {formatDate(date)}
    </span>
  )
}
