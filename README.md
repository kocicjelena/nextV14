## benefit

* One benefit of using layout is that on navigation, only the page components update while the layout won’t re-render. In Next.js, this is called partial rendering
* Show an active link with the usePathName() hook.
* In addition to client-side navigation, Next.js automatically code splits your application by route segments. This is different from a traditional SPA, where browser loads all your application code on initial load.
(Furthermore, in a production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background.)

## reminders
(https://nextjs.org/learn) 
https://nextjs.org/learn/dashboard-app/css-styling
Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment.
