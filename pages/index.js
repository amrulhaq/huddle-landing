import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img src='/logo.svg' />
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src='/illustration-mockups.svg' />
          </div>
          <div className={styles.copyText}>
            <div className={styles.heading}>
              <h1>Build The Community</h1>
              <h1>Your Fans Will Love</h1>
            </div>
            <p>Huddle re-immagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
            <button>
              <span>Register</span>
            </button>
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </span>
          <span className={styles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </span>
          <span className={styles.socialIcon}>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
      </main>
    </div>
  )
}
