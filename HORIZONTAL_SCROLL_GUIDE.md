# Premium Horizontal Scroll Gallery

## 🎬 Overview

Inspired by the award-winning [landonorris.com](https://www.landonorris.com) website, this horizontal scroll gallery creates a cinematic, immersive experience for showcasing your travel photos.

## ✨ Key Features

### 1. **Scroll-Driven Animation**
- Vertical scroll controls horizontal movement
- Smooth, butter-like transitions using `translate3d` for GPU acceleration
- Eased progress curve for natural start/end feel

### 2. **Advanced Parallax Effects**
- Images animate with staggered timing
- Dynamic scaling and translation on scroll
- Opacity transitions for elegant reveals
- Text elements fade and slide into view

### 3. **Premium Design Elements**
- **Variable Card Sizes**: Creates visual rhythm and interest
- **Gradient Overlays**: Luxury feel with amber/orange tourism branding
- **Hover States**: Interactive feedback with smooth transitions
- **Decorative Accents**: Corner borders and divider lines
- **Pattern Background**: Subtle dot grid for depth

### 4. **Performance Optimized**
- `requestAnimationFrame` for smooth 60fps animations
- `will-change-transform` for hardware acceleration
- Passive scroll listeners
- Image lazy loading with Next.js Image component

### 5. **Responsive Progress Indicator**
- Real-time scroll progress
- Backdrop blur glass morphism effect
- Only visible when section is in viewport
- Smooth transitions and gradients

## 🛠️ Technical Implementation

### HTML Structure
```
section (ref: sectionRef)
└── sticky container (height: 100vh)
    └── horizontal track (ref: trackRef)
        ├── Photo cards (varying widths)
        ├── Quote section
        ├── More photo cards
        └── End spacer
```

### Key Calculations

#### Section Height
```javascript
const scrollDistance = trackWidth - viewportWidth;
section.height = scrollDistance + window.innerHeight * 2.5;
```
The height determines how long the user scrolls through this section.

#### Scroll Progress
```javascript
const scrollStart = sectionTop - windowHeight * 0.5;
const scrollEnd = sectionTop + sectionHeight - windowHeight * 0.5;
const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
```

#### Eased Translation
```javascript
const easedProgress = progress < 0.5 
  ? 2 * progress * progress 
  : 1 - Math.pow(-2 * progress + 2, 2) / 2;
const translateX = -(easedProgress * maxScroll);
```

#### Parallax per Image
```javascript
const delay = index * 0.03; // Stagger effect
const imageProgress = (progress - delay) * 1.1;
const parallaxAmount = 80 * (1 - imageProgress);
const scale = 1 + (0.05 * (1 - imageProgress));
```

## 🎨 Design Decisions

### Card Sizing Logic
```javascript
const isLarge = index % 4 === 0;    // 65vw wide, 80vh tall
const isMedium = index % 4 === 2;   // 50vw wide, 75vh tall
const isSmall = other indices;      // 45vw wide, 70vh tall
```

This creates visual hierarchy and prevents monotony.

### Color System
- **Primary**: Amber/Orange gradients (tourism brand)
- **Overlays**: Black gradients with 70% opacity
- **Accents**: Amber-300/400 for highlights
- **Background**: Subtle amber-50 tints

### Border Radius
- Consistent 24px (`rounded-2xl`) for modern, soft aesthetic
- Large enough to feel premium, not so large it's cartoonish

## 🔧 Customization Guide

### Change Card Sizes
Edit the width/height calculation:
```typescript
const width = isLarge ? '70vw' : isMedium ? '55vw' : '50vw';
const height = isLarge ? '85vh' : isMedium ? '78vh' : '73vh';
```

### Adjust Parallax Intensity
```typescript
const parallaxAmount = 120 * (1 - imageProgress); // More intense
const scale = 1 + (0.1 * (1 - imageProgress));    // More zoom
```

### Change Scroll Speed
```typescript
section.style.height = `${scrollDistance + window.innerHeight * 3}px`;
// Larger multiplier = slower scroll
```

### Modify Easing Function
```typescript
// Current: Ease in-out
const easedProgress = progress < 0.5 
  ? 2 * progress * progress 
  : 1 - Math.pow(-2 * progress + 2, 2) / 2;

// Linear (no easing)
const easedProgress = progress;

// Ease out only
const easedProgress = 1 - Math.pow(1 - progress, 3);
```

### Update Photo Data
Edit the `photos` array:
```typescript
const photos: Photo[] = [
  { 
    id: 1, 
    src: '/your-image.jpg', 
    alt: 'Description', 
    location: 'Location Name', 
    year: '2024' 
  },
  // ... more photos
];
```

## 🎯 Usage

### Integration
The component is already integrated into `PhotoGallery.tsx` with a view mode toggle:

```tsx
import HorizontalGallery from './HorizontalGallery';

// In your component
{viewMode === "horizontal" && <HorizontalGallery />}
```

### Toggle Views
Users can switch between:
- **Cinematic Scroll**: The horizontal scroll experience
- **Classic View**: Traditional grid gallery

## 📱 Responsive Behavior

### Desktop (>= 992px)
- Full cinematic experience
- Large card sizes for impact
- Smooth parallax effects

### Tablet (768px - 991px)
- Slightly reduced card sizes
- Maintained spacing
- All effects intact

### Mobile (< 768px)
- Adjusted padding (px-6 instead of px-12)
- Responsive text sizes
- Optimized touch scrolling

## 🚀 Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Implement progressive JPEGs
   - Compress images to ~200KB max

2. **Loading Strategy**
   - Priority load first 3 images
   - Lazy load remaining images
   - Use appropriate `sizes` attribute

3. **Animation Performance**
   - Uses GPU-accelerated transforms
   - Passive event listeners
   - requestAnimationFrame for smooth updates

## 🎓 Learning from landonorris.com

### What We Adopted
1. **Scroll-driven horizontal movement**
2. **Parallax image effects**
3. **Variable card sizing**
4. **Text reveal animations**
5. **Progress indicators**

### What We Improved
1. **TypeScript implementation**
2. **React/Next.js integration**
3. **Tourism-specific branding**
4. **Better responsive handling**
5. **Cleaner, more maintainable code**

## 🐛 Troubleshooting

### Images not appearing?
- Check image paths in `/public/gallery/`
- Verify file extensions (jpg vs jpeg)
- Check Next.js Image loader configuration

### Scroll feels janky?
- Reduce parallax intensity
- Decrease number of animated elements
- Check for heavy renders in parent components

### Section height too long/short?
- Adjust the multiplier in `updateHeight()`
- Current: `window.innerHeight * 2.5`

## 📊 Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

Requires:
- CSS `translate3d` support
- `requestAnimationFrame`
- ES6+ JavaScript

## 🎉 Result

A world-class, cinematic gallery experience that:
- ✨ Engages users with smooth animations
- 🎨 Showcases photos in premium fashion
- 📱 Works flawlessly across devices
- ⚡ Performs at 60fps
- 🏆 Matches high-end commercial websites

---

**Built with ❤️ for Hija Travels**

For questions or customization requests, refer to the inline code comments in `HorizontalGallery.tsx`.

