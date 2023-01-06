import { SimpleForm } from './components/simple-form';

export default function HomePage() {
  return (
    <div className='container'>
      <h1 className='exa'>This is n13base</h1>
      <p>An extremely basic starter using Next.js 13, the app directory, Typescript, and some other goodies.</p>
      <SimpleForm />
    </div>
  );
}
