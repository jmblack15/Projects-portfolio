import Image from "next/image"
import styles from "./window.module.css";

const Window = ({ children }) => {
  return (
    <section className={styles.window}>
      <div className={styles.window_bar}>
        <div></div>
        <div className={styles.bar_controls}>
          <div>X</div>
        </div>
      </div>
      {children}
    </section>
  )
}

export { Window }
