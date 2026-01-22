# 🚀 Quick Start Guide - Hija Travels

## What Changed?

Your website is now a **single-page application** with:
- ✅ No database needed
- ✅ WhatsApp integration throughout
- ✅ 3 vehicles showcased
- ✅ Engaging Sri Lanka content
- ✅ Professional + humorous copy
- ✅ Mobile-first design

## 🏃‍♂️ Start Development

```bash
# If not running already
npm run dev
```

Visit: **http://localhost:3001**

## ⚡ Quick Updates Needed

### 1. WhatsApp Number (URGENT!)

**Find**: `94771234567`  
**Replace with**: Your WhatsApp number

**Where**: 
- `app/page.tsx`
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

**Format**: No + or spaces  
Example: `94771234567` for +94 77 123 4567

### 2. Vehicle Photos

Replace placeholder images in `app/page.tsx`:
- Line ~74: Sedan photo
- Line ~82: SUV photo  
- Line ~90: Mini Van photo

### 3. Contact Info

In `components/layout/Footer.tsx`:
- Email (line ~53)
- Address (line ~60)
- Social media links (lines ~85, ~92)

## 📂 Key Files

```
app/
  page.tsx          ← Main single page (all content here!)
  layout.tsx        ← Site wrapper
  globals.css       ← Global styles

components/layout/
  Header.tsx        ← Top navigation with WhatsApp
  Footer.tsx        ← Bottom section with contact

CHANGES.md                 ← Detailed change log
UPDATE_WHATSAPP.md         ← WhatsApp update guide
CUSTOMIZATION_GUIDE.md     ← Content customization help
```

## 🧪 Testing Checklist

- [ ] Visit http://localhost:3001
- [ ] Click WhatsApp buttons (they'll open WhatsApp Web)
- [ ] Scroll through all sections
- [ ] Test on mobile (use network URL)
- [ ] Verify all text is readable
- [ ] Check images load correctly

## 🌐 Deploy to Vercel

```bash
# Build first
npm run build

# Deploy
vercel --prod
```

Or:
1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy automatically

## 📱 Mobile Testing

Get the network URL from terminal:
```
- Network: http://172.20.10.3:3001
```

Open this on your phone (same WiFi) to test!

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` → brand colors

### Update Content
Edit `app/page.tsx`:
- Hero text: Line ~118-130
- Vehicles: Line ~67-97
- Testimonials: Line ~99-155
- Benefits: Line ~175-228

### More Help
See `CUSTOMIZATION_GUIDE.md` for detailed instructions

## ❓ Common Issues

**Port 3000 already in use?**
→ Server auto-uses 3001 (or next available)

**Images not loading?**
→ Check internet (using Unsplash currently)
→ Replace with local images in `/public/`

**WhatsApp not opening?**
→ Update number format (no + or spaces)
→ Test on actual mobile device

**TypeScript errors?**
→ Run: `npm run build` to check for errors

## 📖 Full Documentation

- **CHANGES.md** - What was changed and why
- **UPDATE_WHATSAPP.md** - Step-by-step WhatsApp update
- **CUSTOMIZATION_GUIDE.md** - Content customization
- **README_NEW.md** - Complete project documentation

## 🎯 Priority Tasks

1. ⚠️ **Update WhatsApp number** (test it works!)
2. 📸 **Replace vehicle photos** (use your actual vehicles)
3. 💬 **Add real testimonials** (get customer permission)
4. ✉️ **Update email/social links**
5. 🚀 **Deploy to production**

## 💡 Pro Tips

- Keep the humor - it makes you memorable!
- Test WhatsApp on real phone before going live
- Mobile-first: 70%+ of traffic will be mobile
- Update photos to actual vehicles ASAP
- Get real testimonials with permission

## 🆘 Need Help?

1. Read the error message carefully
2. Check documentation files in project root
3. Search online for Next.js/React solutions
4. Restart dev server: `Ctrl+C` then `npm run dev`

## ✅ Ready to Launch?

- [ ] WhatsApp number updated & tested
- [ ] All contact info verified
- [ ] Photos replaced or verified
- [ ] Content proofread
- [ ] Mobile tested
- [ ] Build successful: `npm run build`
- [ ] Deployed: `vercel --prod`

---

**You're all set!** 🎉

The site is modern, fast, and ready to convert visitors into customers.

**Current Status**: Running at http://localhost:3001

Just update that WhatsApp number and you're good to go! 🚀
