# 🎨 Content Customization Guide

## Vehicle Photos to Update

### Current Placeholders (Replace with your actual vehicles!)

**Sedan:**
- Current: `https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070`
- Upload your sedan photo and update in `app/page.tsx` line ~74

**SUV:**
- Current: `https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071`
- Upload your SUV photo and update in `app/page.tsx` line ~82

**Mini Van:**
- Current: `https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070`
- Upload your mini van photo and update in `app/page.tsx` line ~90

### How to Add Your Photos

Option 1: **Use Supabase/Cloud Storage**
1. Upload to image hosting service
2. Get public URL
3. Replace in code

Option 2: **Use /public folder**
1. Add images to `/public/vehicles/`
2. Reference as `/vehicles/sedan.jpg`
3. Update in code

## Testimonials to Customize

Replace mock testimonials with real reviews! Located in `app/page.tsx` around line ~99-155.

**Template for each testimonial:**
```javascript
{
  id: 1,
  name: "Customer Name",
  country: "Country",
  rating: 5,
  comment: "Their actual review quote here",
  trip: "Type of tour they took",
}
```

**Pro Tips:**
- Use real names with permission
- Include country for international appeal
- Keep reviews authentic and specific
- Mix different tour types
- Show language diversity if possible

## Social Media Links

Update in `components/layout/Footer.tsx`:

```typescript
// Line ~85 - Facebook
<a href="YOUR_FACEBOOK_PAGE_URL">

// Line ~92 - Instagram  
<a href="YOUR_INSTAGRAM_PAGE_URL">
```

## Company Email

Update in `components/layout/Footer.tsx` line ~53:
```typescript
<a href="mailto:YOUR_ACTUAL_EMAIL@domain.com">
```

## Location/Address

Update in `components/layout/Footer.tsx` line ~60:
```typescript
<span className="text-blue-100 text-sm">
  Your Actual Address, City, Sri Lanka
</span>
```

## Content Tone Adjustments

### Current Style: Professional + Humor

If you want to adjust the tone:

**More Professional** (Less Humor):
- Remove emojis
- Simplify descriptions
- Use formal language

**More Casual** (More Humor):
- Add more emojis
- Include local slang
- Add more jokes

### Key Sections to Adjust

**Hero Section** (`app/page.tsx` line ~118):
```typescript
<p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
  YOUR CUSTOM TAGLINE HERE
</p>
```

**About Section** (`app/page.tsx` line ~156):
- Title: Line ~159
- Description: Line ~163

**Benefits Section** (`app/page.tsx` line ~175-228):
Each benefit has:
- Icon
- Title  
- Description

## Vehicle Features

Customize features for each vehicle in `app/page.tsx`:

**Sedan** (line ~76-78):
```javascript
features: ["Your Feature 1", "Your Feature 2", "Your Feature 3", "Your Feature 4"],
```

**SUV** (line ~84-86):
```javascript
features: ["Your Feature 1", "Your Feature 2", "Your Feature 3", "Your Feature 4"],
```

**Mini Van** (line ~92-94):
```javascript
features: ["Your Feature 1", "Your Feature 2", "Your Feature 3", "Your Feature 4"],
```

## Sri Lanka Highlights

Update the 6 highlight cards in `app/page.tsx` (line ~239-373):

Each card has:
- **Image URL**: Background photo
- **Title**: Main heading
- **Description**: Engaging copy

**Current Topics:**
1. UNESCO World Heritage Sites
2. Wildlife & Safaris
3. Beaches
4. Tea Plantations
5. Cuisine
6. Friendly People

**To Update:**
- Change photos (line ~246, ~265, ~284, etc.)
- Edit descriptions
- Add your unique selling points

## Pricing Information

Currently, there's no pricing shown (intentional - encourages contact).

**To Add Pricing:**

Option 1: Add to vehicle cards
```typescript
<p className="text-2xl font-bold text-brand-600 mb-2">
  $XX / day
</p>
```

Option 2: Add "Starting from $XX" in description
```typescript
<p className="text-sm text-gray-500">
  Starting from $XX per day
</p>
```

## Languages You Speak

Update in `app/page.tsx` line ~178 and throughout:

Current:
```typescript
English, German, Spanish, Japanese, French, Italian
```

Replace with your actual languages!

## Free Extras/Perks

Update the special perks section in `app/page.tsx` line ~467-497:

Current perks:
- ✨ Flexible Itinerary
- 📸 Free Photography
- 🗺️ Local Insider Tips
- 💝 24/7 Support

**Add your own:**
```typescript
<div className="flex items-start space-x-3">
  <span className="text-2xl">YOUR_EMOJI</span>
  <div>
    <h4 className="font-semibold mb-1">Your Perk Title</h4>
    <p className="text-blue-100 text-sm">Description of what you offer</p>
  </div>
</div>
```

## Background Images

Main sections with background images:

1. **Hero Section** (line ~113):
   - Current: Sigiriya Rock
   - Update with your best Sri Lanka photo

2. **CTA Section** (line ~531):
   - Current: Landscape photo
   - Update with compelling image

## Call-to-Action Messages

**WhatsApp Pre-filled Messages** - Customize in each WhatsApp link:

Hero button (line ~125):
```
?text=Hi! I'm interested in exploring Sri Lanka with Hija Travels
```

Vehicle section (line ~349):
```
?text=Hi! I'd like to know more about your vehicles and pricing
```

Final CTA (line ~477):
```
?text=Hi Hija Travels! I'm interested in exploring Sri Lanka. Can you help me plan my trip?
```

## Stats to Update

In testimonials section (line ~569):
```typescript
⭐⭐⭐⭐⭐ 5.0 Average Rating from 200+ Happy Travelers!
```

Update with your actual numbers!

## Quick Customization Checklist

- [ ] Replace vehicle photos
- [ ] Update WhatsApp number
- [ ] Add real testimonials
- [ ] Update social media links
- [ ] Change company email
- [ ] Update location/address
- [ ] Customize languages spoken
- [ ] Add/remove free perks
- [ ] Adjust tone (more/less humor)
- [ ] Update stats (travelers served, rating)
- [ ] Test all links and buttons
- [ ] Mobile test everything
- [ ] Proofread all text

## Advanced: Color Scheme

To change brand colors, update `tailwind.config.ts`:

```typescript
brand: {
  50: '#YOUR_COLOR',
  // ... etc
  900: '#YOUR_COLOR',
}
```

Current scheme: Blue/Teal (professional, trustworthy)

Alternative ideas:
- Green: Nature, eco-friendly
- Orange: Energetic, adventurous  
- Purple: Luxury, premium

---

**Pro Tip:** Keep backups before making major changes! Test everything on mobile devices. The humor makes you memorable - don't remove all personality! 😊

**Questions?** The code is well-commented. Search for "TODO" if you added any, or customize section by section.
