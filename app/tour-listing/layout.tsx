export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container">
        <div className="mt-4 mb-16">{children}</div>
      </div>
    </section>
  );
}
