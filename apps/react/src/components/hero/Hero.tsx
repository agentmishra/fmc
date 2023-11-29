import styles from './hero.module.scss';

function Hero() {
  return (
    <main className={styles.hero}>
      <div>
        <h1>
          Prepare for <span>UI coding interviews</span>
        </h1>

        <p>by solving the collection of challenges from Frontend Mini Challenges</p>

        <h3 className={styles.link}>
          <a href="/fmc/javascript/">JS Mini Challenges</a>
        </h3>

        <h3 className={styles.link}>
          <a href="/fmc/react/dist/#/challenges">React Mini challenges</a>
        </h3>

        <h3 className={styles.link}>
          <a href="/fmc/vue/dist/#/">VueJs Mini challenges</a>
        </h3>
      </div>

      <figure className={styles.figure}>
        <img className={styles.heroImage} src="https://github.com/sadanandpai/fmc/raw/main/cover.png" alt="brand" />
        <figcaption>Collection of frontend challenges for learning and interviews</figcaption>
      </figure>
    </main>
  );
}

export default Hero;