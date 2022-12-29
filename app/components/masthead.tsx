import Link from 'next/link';
import { Logo } from './logo';
import Nav from './nav';

export default function Masthead() {
  return (
    <header>
      <Link href='/'>
        <Logo />
      </Link>
      <Nav />
    </header>
  );
}
