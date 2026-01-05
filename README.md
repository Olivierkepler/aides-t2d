This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

stampley-app/
├─ app/
│  ├─ (public)/
│  │  ├─ login/
│  │  │  └─ page.tsx
│  │  ├─ forgot-password/
│  │  │  └─ page.tsx
│  │  ├─ reset-password/
│  │  │  └─ page.tsx
│  │  └─ layout.tsx
│  │
│  ├─ (participant)/
│  │  ├─ dashboard/
│  │  │  └─ page.tsx
│  │  ├─ check-in/
│  │  │  ├─ today/
│  │  │  │  └─ page.tsx
│  │  │  ├─ history/
│  │  │  │  └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ progress/
│  │  │  └─ page.tsx
│  │  ├─ tips/
│  │  │  └─ page.tsx
│  │  ├─ settings/
│  │  │  └─ page.tsx
│  │  └─ layout.tsx
│  │
│  ├─ (admin)/
│  │  ├─ admin/
│  │  │  ├─ page.tsx
│  │  │  ├─ participants/
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [id]/
│  │  │  │     └─ page.tsx
│  │  │  ├─ enrollment/
│  │  │  │  └─ page.tsx
│  │  │  ├─ content/
│  │  │  │  └─ page.tsx
│  │  │  ├─ reports/
│  │  │  │  └─ page.tsx
│  │  │  └─ layout.tsx
│  │  └─ layout.tsx
│  │
│  ├─ api/
│  │  ├─ auth/
│  │  │  ├─ login/
│  │  │  │  └─ route.ts
│  │  │  ├─ logout/
│  │  │  │  └─ route.ts
│  │  │  ├─ forgot-password/
│  │  │  │  └─ route.ts
│  │  │  └─ reset-password/
│  │  │     └─ route.ts
│  │  │
│  │  ├─ participant/
│  │  │  ├─ dashboard/
│  │  │  │  └─ route.ts
│  │  │  ├─ weekly-focus/
│  │  │  │  └─ route.ts
│  │  │  ├─ progress/
│  │  │  │  └─ route.ts
│  │  │  └─ tips/
│  │  │     └─ route.ts
│  │  │
│  │  ├─ checkins/
│  │  │  ├─ create/
│  │  │  │  └─ route.ts
│  │  │  ├─ today/
│  │  │  │  └─ route.ts
│  │  │  └─ history/
│  │  │     └─ route.ts
│  │  │
│  │  └─ admin/
│  │     ├─ participants/
│  │     │  └─ route.ts
│  │     ├─ participants/
│  │     │  └─ [id]/
│  │     │     └─ route.ts
│  │     ├─ enrollment/
│  │     │  └─ route.ts
│  │     ├─ content/
│  │     │  └─ route.ts
│  │     └─ reports/
│  │        └─ route.ts
│  │
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ not-found.tsx
│  └─ error.tsx
│
├─ components/
│  ├─ ui/
│  ├─ auth/
│  ├─ dashboard/
│  ├─ checkin/
│  ├─ admin/
│  └─ shared/
│
├─ lib/
│  ├─ auth/
│  ├─ db/
│  ├─ services/
│  ├─ validators/
│  └─ utils/
│
├─ types/
│  ├─ auth.ts
│  ├─ participant.ts
│  ├─ checkin.ts
│  └─ admin.ts
│
├─ public/
│  ├─ images/
│  └─ icons/
│
├─ styles/
│  └─ globals.css   (or use app/globals.css)
│
├─ prisma/          (if using Prisma)
│  ├─ schema.prisma
│  └─ migrations/
│
├─ middleware.ts    (optional)
├─ .env.local
├─ next.config.js
├─ tsconfig.json
└─ package.json

