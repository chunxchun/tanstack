import { createFileRoute, Link, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/organization/")({
  component: OrganizationIndex,
});

function OrganizationIndex() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Organization Index</h1>
      <p>Welcome to the organization index page.</p>
    </div>
  );
}

