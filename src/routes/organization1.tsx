import { listOrganizationAction } from "#/serverActions/organizationActions";
import { CreateOrganizationForm } from "@/components/forms/create-organization-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/organization1")({
  loader: async () => listOrganizationAction(),
  component: RouteComponent,
});

function RouteComponent() {
  const organizations = Route.useLoaderData();
  return (
    <div>
      <h1>Hello "/organization"!</h1>
      <pre>{JSON.stringify(organizations, null, 2)}</pre>
      <CreateOrganizationForm />
    </div>
  );
}
