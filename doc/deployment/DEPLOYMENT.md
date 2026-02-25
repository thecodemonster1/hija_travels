# Deployment Guide - Hija Travels

## Pre-Deployment Checklist

- ✅ Supabase project created
- ✅ Database schema executed
- ✅ Storage buckets created (`trips`, `reviews`)
- ✅ Storage policies configured
- ✅ At least one admin user created
- ✅ Environment variables ready

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):

```bash
git init
git add .
git commit -m "Initial commit - Hija Travels"
```

2. Create a GitHub repository and push:

```bash
git remote add origin https://github.com/yourusername/hija-travels.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables

In Vercel project settings, add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Step 4: Deploy

Click "Deploy" and wait for the build to complete.

### Step 5: Update Supabase Settings

1. Go to your Supabase project
2. Navigate to **Authentication** > **URL Configuration**
3. Add your Vercel domain to **Site URL** and **Redirect URLs**:
   - Site URL: `https://your-domain.vercel.app`
   - Redirect URLs: `https://your-domain.vercel.app/**`

## Alternative: Deploy to Netlify

### Step 1: Build Settings

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Environment Variables

Add the same environment variables in Netlify dashboard.

### Step 3: Deploy

```bash
netlify deploy --prod
```

## Custom Domain Setup

### On Vercel

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

### DNS Records

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Post-Deployment Tasks

### 1. Test Authentication Flow

- Sign up a new user
- Sign in
- Test password reset

### 2. Create Initial Content

- Log in as admin
- Create 2-3 sample trips
- Upload high-quality images
- Add descriptions

### 3. Add Sample Reviews

- Sign up as a regular user
- Leave reviews on trips
- Upload review images

### 4. SEO Optimization

- Submit sitemap to Google Search Console
- Add Google Analytics (optional)
- Test meta tags with social media preview tools

### 5. Performance Check

- Test on mobile devices
- Check Lighthouse scores
- Verify image optimization

## Environment-Specific Configuration

### Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
```

### Staging

Create a separate Supabase project for staging:

```env
NEXT_PUBLIC_SUPABASE_URL=your_staging_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_staging_anon_key
```

## Monitoring

### Vercel Analytics

Enable in project settings for:

- Real-time performance metrics
- Web vitals tracking
- Visitor insights

### Supabase Monitoring

Check regularly:

- Database size
- Storage usage
- API requests
- Active users

## Backup Strategy

### Database Backups

Supabase Pro includes automatic daily backups.

For manual backups:

```bash
# Use Supabase CLI or pg_dump
supabase db dump > backup.sql
```

### Storage Backups

Consider periodic downloads of:

- Trip images
- Review images
- User avatars

## Scaling Considerations

### Database

- Monitor query performance
- Add indexes as needed
- Upgrade Supabase plan if needed

### Storage

- Implement image compression
- Use CDN for static assets
- Monitor bandwidth usage

### Compute

- Vercel scales automatically
- Monitor function execution time
- Optimize heavy operations

## Security Checklist

- ✅ RLS policies enabled on all tables
- ✅ Storage policies configured
- ✅ Environment variables secured
- ✅ HTTPS enforced
- ✅ CORS configured properly
- ✅ Rate limiting enabled (Supabase)

## Troubleshooting

### Build Fails

Check:

- All dependencies installed
- TypeScript types correct
- Environment variables set
- No ESLint errors

### Images Not Loading

Verify:

- Storage buckets are public
- Storage policies allow read access
- Image URLs are correct
- Domain added to next.config.ts

### Authentication Issues

Check:

- Supabase URL correct
- Redirect URLs configured
- Email templates enabled
- SMTP settings (if custom email)

## Update Strategy

### Minor Updates

```bash
git pull origin main
npm install
npm run build
git push
```

### Major Updates

1. Test in staging environment
2. Create database migration if needed
3. Update documentation
4. Deploy to production
5. Monitor for issues

## Maintenance Schedule

**Daily**:

- Monitor error logs
- Check uptime

**Weekly**:

- Review analytics
- Update content
- Check user feedback

**Monthly**:

- Update dependencies
- Review security
- Backup critical data
- Performance audit

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Quick Deploy Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Success Criteria

✅ Website loads in < 3 seconds
✅ Mobile responsive on all pages
✅ All forms working correctly
✅ Images optimized and loading fast
✅ Admin can create/edit/delete trips
✅ Users can sign up and leave reviews
✅ SEO meta tags present
✅ No console errors
✅ Lighthouse score > 90

---

**Deployment Date**: **********\_**********
**Deployed By**: **********\_**********
**Production URL**: **********\_**********
