import { CreateOrganizationForm } from "@/components/forms/create-organization-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/organization")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/organization"!</h1>
      <CreateOrganizationForm />
    </div>
  );
}
