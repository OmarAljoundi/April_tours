export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 md:px-4">
      <div className="container">
        <div className="mt-4 mb-16">{children}</div>
      </div>
    </section>
  );
}
