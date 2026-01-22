# 🌴 Hija Travels - Sri Lanka Tour Guide

A premium single-page website for Hija Travels, showcasing Sri Lankan tour services with personality, humor, and style!

## ✨ Features

- **Single-Page Design**: All content on one beautiful, scrollable page
- **No Database Required**: Static content, fast and simple
- **WhatsApp Integration**: Direct customer connection via WhatsApp
- **3 Vehicle Options**: Sedan, SUV, and Mini Van with detailed features
- **Rich Sri Lanka Content**: Highlighting the beauty and culture of Sri Lanka
- **Engaging Copy**: Professional yet humorous content that converts
- **Multilingual Emphasis**: Showcasing language capabilities
- **Mobile-First Responsive**: Perfect on all devices
- **Premium Design**: Luxury tourism aesthetic with Tailwind CSS

## 🚗 Vehicle Fleet

1. **Luxury Sedan** - Perfect for couples (up to 3 passengers)
2. **Spacious SUV** - Ideal for families (up to 6 passengers)
3. **Luxury Mini Van** - Best for groups (up to 12 passengers)

## 🌟 Key Sections

- **Hero**: Eye-catching intro with WhatsApp CTA
- **About/Benefits**: Why choose Hija Travels (multilingual, safe, friendly, free extras)
- **Sri Lanka Highlights**: 6 key attractions and experiences
- **Vehicle Showcase**: 3 vehicles with features and photos
- **Why Choose Us**: Unique selling points with humor
- **Testimonials**: 6 reviews from international travelers
- **CTA Section**: Final conversion section with WhatsApp

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📱 Contact Integration

WhatsApp number is configured throughout: **+94 77 123 4567**

Update this number in:
- `app/page.tsx` (multiple locations)
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

## 🎨 Tech Stack

- **Next.js 15** - App Router
- **React 19** - Server & Client Components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **No Database** - Pure static/frontend

## 📝 Customization

### Update Phone Number
Search for `94771234567` and replace with your WhatsApp number.

### Update Content
Edit `app/page.tsx` to modify:
- Hero text
- Benefits and features
- Vehicle details
- Testimonials
- Sri Lanka highlights

### Update Branding
- Logo: `/public/hija_trevals_logol.png`
- Colors: `tailwind.config.ts` (brand colors)
- Fonts: `app/layout.tsx` (Inter font)

## 🌐 Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📄 License

Private project for Hija Travels.

---

Made with ❤️ for Sri Lankan adventures! 🇱🇰
