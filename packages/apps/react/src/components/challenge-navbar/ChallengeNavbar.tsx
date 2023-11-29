import styles from './challenge-navbar.module.scss';

interface Props {
  title?: string;
}

function ChallengeNavbar({ title }: Props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="#/challenges" className={styles.back}>
          &lt;
        </a>
        <a className={styles.logo} href="/fmc/">
          <img src="/fmc/react/dist/logo.png" alt="logo" />
        </a>
      </div>

      <h1>{title}</h1>

      <div className={styles.right}>
        <a href="https://github.com/sadanandpai/fmc/" target="blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" className={styles.github} />
        </a>
      </div>
    </nav>
  );
}

export default ChallengeNavbar;
