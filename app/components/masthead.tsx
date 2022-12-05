import Link from 'next/link';
import { Logo } from './logo';

export default function Masthead() {
  return (
    <header>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
}
