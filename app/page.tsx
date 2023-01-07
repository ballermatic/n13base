import Link from 'next/link';
import { SimpleForm } from './components/simple-form';

export default function HomePage() {
  return (
    <div className='container'>
      <h1 className='exa' role='heading' aria-level='1'>
        This is n13base
      </h1>
      <p role='doc-subtitle'>An ultra basic Next.js 13 starter.</p>
      <p>
        Note the use of ARIA-role to define heading and subheading. Sweet! These can be used{' '}
        <Link href='https://www.aleksandrhovhannisyan.com/blog/represent-state-with-html-attributes-not-class-names/'>
          for styling
        </Link>
        . While we’re at it, also consider using HTML attributes for{' '}
        <Link href='https://www.aleksandrhovhannisyan.com/blog/represent-state-with-html-attributes-not-class-names/'>
          representing state
        </Link>
        .{' '}
      </p>
      <SimpleForm />
    </div>
  );
}
