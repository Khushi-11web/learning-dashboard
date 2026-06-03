# Next-Gen Learning Dashboard

A modern and responsive learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

* Bento-style dashboard layout
* Server-side data fetching with Next.js App Router
* Supabase database integration
* Animated course cards with progress tracking
* Activity heatmap visualization
* Responsive design for desktop, tablet, and mobile
* Loading skeletons and error handling
* Dark theme UI with modern design

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React

## Environment Variables

Create a `.env.local` file and add:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open:

http://localhost:3000

## Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

## Project Structure

```text
app/
components/
lib/
loading.tsx
page.tsx
```

## Deployment

This project is deployed on Vercel.

## Author

Khushi
