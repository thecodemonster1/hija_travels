# Hija Travels - Premium Tourism Web Application

A production-ready, full-stack tourism company website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

### Public Features

- **Home Page**: Hero section, featured trips, testimonials, and CTAs
- **Trips Listing**: Browse all available tours
- **Trip Details**: Comprehensive trip information with image galleries, videos, and reviews
- **Contact Page**: Contact form, location info, and Google Maps integration
- **User Reviews**: Authenticated users can leave reviews with ratings and images

### Admin Features

- **Admin Dashboard**: Manage all trips from a centralized dashboard
- **Trip Management**: Create, edit, and delete trips
- **Image Management**: Upload cover images and multiple gallery images
- **Content Management**: Add descriptions, locations, YouTube videos, and external links

### Authentication

- User sign-up and sign-in
- Protected admin routes
- Row Level Security (RLS) with Supabase

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Deployment**: Vercel-ready

## Brand Colors

- Primary: `#1B468F`, `#155AA2`, `#0E6DB4`, `#0781C7`, `#0094D9`
- Theme: Professional blue gradient scheme

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema from `supabase/schema.sql`
3. Go to **Storage** and create two public buckets:

   - `trips` (for trip cover and gallery images)
   - `reviews` (for review images)

4. Set up storage policies:

**For `trips` bucket:**

```sql
-- Allow public to read
CREATE POLICY "Public can view trip images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'trips');

-- Allow admins to insert
CREATE POLICY "Admins can upload trip images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'trips' AND
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.is_admin = true
  )
);

-- Allow admins to delete
CREATE POLICY "Admins can delete trip images"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'trips' AND
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.is_admin = true
  )
);
```

**For `reviews` bucket:**

```sql
-- Allow public to read
CREATE POLICY "Public can view review images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'reviews');

-- Allow authenticated users to upload
CREATE POLICY "Users can upload review images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'reviews');

-- Allow users to delete their own images
CREATE POLICY "Users can delete own review images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'reviews' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project settings:

- Go to **Project Settings** > **API**
- Copy the **Project URL** and **anon public** key

### 4. Create Admin User

After signing up through the website:

1. Go to your Supabase project
2. Open **Table Editor** > `profiles`
3. Find your user and set `is_admin` to `true`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
hija_travels/
├── app/
│   ├── admin/              # Admin dashboard and trip management
│   ├── auth/               # Authentication pages
│   ├── contact/            # Contact page
│   ├── trips/              # Trip listing and detail pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── admin/              # Admin components (TripForm, DeleteButton)
│   ├── contact/            # Contact form
│   ├── layout/             # Header and Footer
│   ├── reviews/            # Review form and display
│   └── trips/              # Trip-related components
├── lib/
│   ├── supabase/           # Supabase client configuration
│   └── types/              # TypeScript type definitions
└── supabase/
    └── schema.sql          # Database schema
```

## Database Schema

### Tables

1. **profiles**

   - User profiles with admin flag
   - Linked to Supabase Auth

2. **trips**

   - Trip information
   - Cover image and gallery
   - Optional YouTube video
   - External links (JSON)

3. **reviews**
   - User reviews for trips
   - Star ratings (1-5)
   - Optional images
   - Linked to users and trips

## Key Features Implementation

### Authentication

- Sign up creates a profile automatically via trigger
- Row Level Security ensures data protection
- Admin-only routes protected server-side

### Image Handling

- Supabase Storage for all images
- Automatic public URL generation
- Image optimization with Next.js Image component

### Reviews System

- Authenticated users can leave reviews
- Upload multiple images per review
- Real-time updates with router.refresh()

### Admin Dashboard

- Full CRUD operations for trips
- Image upload and management
- Rich text descriptions

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables on Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Best Practices Implemented

- ✅ Server Components by default for better performance
- ✅ Client Components only where needed (forms, interactivity)
- ✅ Type safety with TypeScript
- ✅ Row Level Security for data protection
- ✅ Image optimization
- ✅ Mobile-first responsive design
- ✅ SEO-friendly metadata
- ✅ Loading states and error handling
- ✅ Accessible UI components

## Customization

### Updating Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    // Update these values
    500: "#0094D9",
    600: "#0781C7",
    // ... etc
  },
}
```

### Adding New Features

The codebase is structured for easy extension:

- Add new pages in `app/`
- Create reusable components in `components/`
- Extend database schema in Supabase
- Update TypeScript types in `lib/types/`

## Support

For issues or questions:

- Check the Supabase documentation
- Review Next.js App Router docs
- Inspect browser console for errors

## License

Private - All Rights Reserved

---

Built with ❤️ for Hija Travels
