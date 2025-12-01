# Next.js + Drizzle ORM Template

A quick-start template for building Next.js applications with Drizzle ORM and PostgreSQL.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn/bun)

### Installation

1. Clone or use this template
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   ```

4. Generate and run migrations:
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm db:generate` - Generate database migrations from schema
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio (database GUI)

## Project Structure

```
├── app/              # Next.js App Router pages and layouts
├── db/
│   ├── schema.ts     # Drizzle schema definitions
│   └── drizzle.ts     # Database connection setup
├── drizzle.config.ts # Drizzle Kit configuration
└── .env              # Environment variables (create this)
```

## Database

The template includes an example `user` table schema in `db/schema.ts`. Modify it to match your needs, then:

1. Update your schema in `db/schema.ts`
2. Generate migrations: `pnpm db:generate`
3. Apply migrations: `pnpm db:migrate`

Use `pnpm db:studio` to visually explore and edit your database.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
