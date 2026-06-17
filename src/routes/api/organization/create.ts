import { createFileRoute } from "@tanstack/react-router";
// import { json } from '@tanstack/react-start';

export const Route = createFileRoute("/api/organization/create")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();
        return new Response(JSON.stringify({ success: true, data: body }), {
          status: 201,
        });
      },
    },
  },
});

// export const ServerRoute = createServerFileRoute('/api/organization/create')({
//   methods: {
//     POST: async ({request}) => {
//       const body = await request.json();
//       return json({ success: true, data: body }, { status: 201 });
//     }
//   }
