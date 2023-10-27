## benefit

* One benefit of using layout is that on navigation, only the page components update while the layout won’t re-render. In Next.js, this is called partial rendering
* Show an active link with the usePathName() hook.
* In addition to client-side navigation, Next.js automatically code splits your application by route segments. This is different from a traditional SPA, where browser loads all your application code on initial load.
(Furthermore, in a production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background.)
* Server Components help us access our back-end resources more securely:
 (async React Server Components included)
* network waterfalls: can be used instead of parallel when appropriate
* parallel data fetching using a JavaScript Pattern
* create API endpoints using Route Handlers (https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
* https://vercel.com/docs/storage/vercel-postgres/sdk

## reminders
- https://nextjs.org/learn
- Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment.
-  @vercel/postgres:
    1) use inside any Server Component. But to allow you to navigate the components more easily, we've kept all the data queries in the data.ts file, and you can import them into the components
    import { sql } from "@vercel/postgres";

    const likes = 100;
    const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
    2) query in vercel dashboard
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
- fetching data: APIs, ORMs, SQL and https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
- API is used:
    * If you're using 3rd party services that provide an API.
    * If you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client
- using React Server Components (fetching data on the server) API layer can be skipped (use promises)

https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering