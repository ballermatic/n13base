import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href='/factory'>Factory</Link>
      <Link href='/kitchen-sink'>Kitchen Sink</Link>
    </nav>
  );
}
