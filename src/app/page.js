// import { Window } from '@/components/Window'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.container_files}>
        <Image src='/images/txt.png' alt='logo VC' width={64} height={64} />
        <p>My CV</p>
      </div>
    </main>
  )
}
