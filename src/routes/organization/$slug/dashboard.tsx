import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organization/$slug/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/organization/$slug/dashboard"!</div>
}
