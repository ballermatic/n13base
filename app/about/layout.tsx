export default function PageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <hr />
      <h5>Layout for page</h5>
      <hr />
      {children}
    </section>
  );
}
