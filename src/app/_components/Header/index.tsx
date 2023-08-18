import Link from 'next/link'
import Brand from '@/app/_components/Brand'
import Menu from '@/app/_components/Menu'
import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.navbody}>
      <div className={styles.navstart}>
        <Link href={'/'}>
          <Brand />
        </Link>
      </div>
      <div className={styles.navend}>
        <Menu />
      </div>
    </header>
  )
}
