# sarabomnext

유저들이 실제 살았던 집에 대해서 커피챗을 신청하는 어플리케이션

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth v5 (Auth.js)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form
- **Animation**: Framer Motion
- **Component Development**: Storybook

## Project Structure

```
src/
  auth/              # NextAuth 인증 시스템
  app/               # Next.js App Router
  components/        # React 컴포넌트
  lib/               # 유틸리티 함수
  providers/         # Context Providers
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
AUTH_SECRET=your-secret-key-here
```

Generate a secret key:
```bash
npx auth secret
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
