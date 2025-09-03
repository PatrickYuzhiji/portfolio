import { OpenPanel } from '@openpanel/nextjs';

// Server-side OpenPanel instance
export const opServer = new OpenPanel({
  clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!,
  clientSecret: process.env.OPENPANEL_API_SECRET_ID!,
});

// Client-side hook (for components that need it)
export { useOpenPanel } from '@openpanel/nextjs';