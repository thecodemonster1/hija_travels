# Quick Start Guide - Hija Travels

## 🚀 Get Started in 5 Minutes

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- Git installed

---

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, Supabase, Tailwind CSS, and more.

---

## Step 2: Set Up Supabase

### A. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in:
   - **Name**: hija-travels
   - **Database Password**: (choose a strong password)
   - **Region**: (closest to your location)
4. Wait for project to be ready (~2 minutes)

### B. Run Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire content from `supabase/schema.sql`
4. Paste and click "Run"
5. You should see "Success. No rows returned"

### C. Create Storage Buckets

1. Go to **Storage** in the sidebar
2. Click "Create a new bucket"
3. Create bucket named `trips`:
   - **Public bucket**: ✅ YES
   - Click "Create bucket"
4. Repeat for bucket named `reviews`:
   - **Public bucket**: ✅ YES
   - Click "Create bucket"

### D. Set Storage Policies

Click on each bucket and go to "Policies" tab, then add these:

**For `trips` bucket:**

1. Read policy (SELECT):

   - Name: "Public can view"
   - Policy: `true`
   - Target roles: `public`

2. Insert policy:

   - Name: "Admins can upload"
   - Policy:

   ```sql
   (bucket_id = 'trips'::text) AND (EXISTS ( SELECT 1
      FROM profiles
     WHERE ((profiles.id = auth.uid()) AND (profiles.is_admin = true))))
   ```

   - Target roles: `authenticated`

3. Delete policy:
   - Name: "Admins can delete"
   - Same policy as insert

**For `reviews` bucket:**

1. Read policy (SELECT):

   - Name: "Public can view"
   - Policy: `true`
   - Target roles: `public`

2. Insert policy:
   - Name: "Users can upload"
   - Policy: `bucket_id = 'reviews'::text`
   - Target roles: `authenticated`

---

## Step 3: Configure Environment Variables

1. Copy the example file:

```bash
cp .env.local.example .env.local
```

2. Get your Supabase credentials:

   - In Supabase, go to **Project Settings** (gear icon)
   - Click **API** in the sidebar
   - Copy **Project URL**
   - Copy **anon public** key

3. Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## Step 4: Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the Hija Travels homepage! 🎉

---

## Step 5: Create Your Admin Account

### A. Sign Up

1. Click "Sign In" in the top right
2. Click "Don't have an account? Sign up"
3. Fill in your details:
   - Full Name: Your Name
   - Email: your@email.com
   - Password: (strong password)
4. Click "Sign Up"
5. Check your email for confirmation link
6. Click the confirmation link

### B. Make Yourself Admin

1. Go back to Supabase dashboard
2. Go to **Table Editor**
3. Select the `profiles` table
4. Find your user row
5. Click on the `is_admin` column
6. Change `false` to `true`
7. Click "Save"

### C. Access Admin Panel

1. Sign in to your website
2. You'll now see "Admin" in the navigation
3. Click "Admin" to access the dashboard

---

## Step 6: Create Your First Trip

1. Go to Admin Dashboard
2. Click "New Trip"
3. Fill in the form:
   - **Title**: "Cultural Heritage Tour"
   - **Location**: "Kandy, Sri Lanka"
   - **Description**: Write a detailed description
   - **Cover Image**: Upload a beautiful Sri Lanka image
   - **Gallery Images**: Upload 4-6 images
   - **YouTube URL** (optional): Paste a video link
4. Click "Create Trip"

---

## 🎨 Customization Tips

### Change Contact Information

Edit `components/layout/Footer.tsx`:

- Update email address
- Update phone/WhatsApp number
- Update location

### Update About Section

Edit `app/page.tsx`:

- Customize the "About Hija Travels" text
- Add your personal story

### Modify Theme Colors

Already configured! The brand colors are:

- `#1B468F` (darkest blue)
- `#155AA2`
- `#0E6DB4`
- `#0781C7`
- `#0094D9` (brightest blue)

---

## 📱 Test Everything

### Public Features

- ✅ Browse home page
- ✅ View trips listing
- ✅ Click on a trip to see details
- ✅ View contact page
- ✅ Sign up as a new user

### User Features (after sign-in)

- ✅ Leave a review on a trip
- ✅ Upload images with review
- ✅ Rate a trip (1-5 stars)

### Admin Features

- ✅ Create a new trip
- ✅ Edit an existing trip
- ✅ Delete a trip
- ✅ Upload multiple images

---

## 🚢 Deploy to Production

See `DEPLOYMENT.md` for detailed deployment instructions to Vercel.

Quick steps:

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

---

## 🆘 Troubleshooting

### "Cannot find module" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not showing

- Check storage bucket is public
- Verify storage policies are correct
- Check image URLs in database

### Can't sign in

- Verify Supabase URL is correct
- Check email confirmation
- Try password reset

### Admin panel not accessible

- Ensure `is_admin` is set to `true` in profiles table
- Sign out and sign in again

---

## 📚 Next Steps

1. **Add More Content**

   - Create 5-10 trips
   - Upload high-quality images
   - Write detailed descriptions

2. **Get Reviews**

   - Ask friends to test
   - Leave sample reviews
   - Upload review photos

3. **Customize Content**

   - Update contact information
   - Personalize about section
   - Add your social media links

4. **SEO Optimization**

   - Add proper meta descriptions
   - Submit to Google Search Console
   - Create a sitemap

5. **Go Live**
   - Deploy to Vercel
   - Connect custom domain
   - Share with customers!

---

## 💡 Pro Tips

- Use high-resolution images (minimum 1920x1080)
- Keep trip descriptions detailed but scannable
- Update content regularly to keep site fresh
- Respond to reviews to build trust
- Use WhatsApp for instant customer contact
- Test on mobile devices regularly

---

## 📞 Need Help?

Check these files:

- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide
- `supabase/schema.sql` - Database structure

---

**You're all set! Start building your tourism empire! 🌏✈️**
