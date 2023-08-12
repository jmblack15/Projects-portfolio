import { Window } from '@/components/Window'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container_files}>

        <div>
          <Image src='/images/txt.png' alt='logo VC' width={68} height={68} />
          <p>My CV</p>
        </div>
      </div>

      <Window></Window>
    </main>
  )
}
