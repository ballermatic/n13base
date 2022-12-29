import { headingFont } from '../utils/fonts';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={headingFont.className}>
      {/* Include branch-specific shared UI here */}
      <hr />
      <h5>Layout for page</h5>
      <hr />
      {children}
    </section>
  );
}
