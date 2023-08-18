import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <div className={styles.notfound}>
        <h1 className={styles.notfoundtext}>ページが見つかりませんでした。</h1>
      </div>
    </>
  )
}
