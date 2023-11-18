import VisaCreation from "@/components/settings/visa";

export default async function EditVisaPage({
  params,
}: {
  params: { uuid: string };
}) {
  return (
    <div className="px-8">
      <h1 className="text-3xl mt-4">Edit Visa</h1>
      <h1>Visa Form</h1>
      <VisaCreation id={params.uuid} />
    </div>
  );
}
