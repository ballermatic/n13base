import Link from 'next/link';
import { Logo } from './Logo';
// import Nav from './Nav';
import styles from './masthead.module.scss';

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <Link href='/'>
        <Logo />
      </Link>
      {/* <Nav /> */}
    </header>
  );
}
