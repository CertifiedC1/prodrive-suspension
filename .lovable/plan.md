
# ProDrive Suspension Website Enhancement Plan

## Overview
This plan addresses a comprehensive set of updates including contact information changes, social media integration, theme toggle, branding updates, new product images, videos in the knowledge center, and enhanced interactivity across all pages.

---

## 1. Branding and Favicon Updates

### 1.1 Custom Logo and Favicon
- Copy `user-uploads://image.png` (ProDrive Suspension logo) to `public/favicon.png` and `src/assets/logo.png`
- Update `index.html` to use the new favicon:
  ```html
  <link rel="icon" type="image/png" href="/favicon.png" />
  ```
- Update Open Graph image to use the branded logo
- Replace the "P" logo in Navbar with the actual ProDrive logo image

---

## 2. Contact Information Updates

### 2.1 Phone Number and Email
Update the following across all files:
- **Phone**: `+254748418583`
- **Email**: `prodrivesuspension@gmail.com`

**Files to update:**
- `src/pages/Contact.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/pages/Home.tsx` (WhatsApp CTA)

---

## 3. WhatsApp Integration

### 3.1 Update WhatsApp Button
Update `src/components/WhatsAppButton.tsx`:
```
Phone: 254748418583
Message: "Hello PRODRIVE SUSPENSION! I'm interested in your products."
URL: https://wa.me/254748418583?text=Hello%20PRODRIVE%20SUSPENSION!%20I'm%20interested%20in%20your%20products.
```

---

## 4. Social Media Links

### 4.1 Update All Social Icons
- **Instagram**: `https://www.instagram.com/prodrive_suspension?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`
- **Facebook**: `https://www.facebook.com/profile.php?id=61576710055058` (Prodrive Suspension page)
- **TikTok** (NEW): `https://www.tiktok.com/@prodrive_suspension?_t=ZM-907kLtVGXa0&_r=1`

**Files to update:**
- `src/components/layout/Footer.tsx` - Add TikTok icon using a custom SVG or lucide icon
- `src/pages/Contact.tsx` - Add TikTok social link

---

## 5. Footer Updates

### 5.1 Update Footer Content
- Change phone to `+254748418583`
- Change email to `prodrivesuspension@gmail.com`
- Remove "Founder: Isaac Irungu | Made with heart in Kenya"
- Add "Designed by ELIUD NDUNG'U"
- Add TikTok icon with proper link
- Update Instagram and Facebook URLs

---

## 6. Dark/Light Mode Toggle

### 6.1 Create Theme Toggle Component
Create `src/components/ThemeToggle.tsx`:
- Add Sun/Moon icons for toggle
- Use `next-themes` package (already installed) for theme management
- Position in top-right of Navbar

### 6.2 Update App.tsx
- Wrap app with ThemeProvider from next-themes

### 6.3 Update Navbar
- Add ThemeToggle button to the right side of navigation

---

## 7. Home Page Updates

### 7.1 Remove Scroll Indicator
Remove the white rounded div:
```jsx
<div className="w-1.5 h-3 bg-white/50 rounded-full" />
```

### 7.2 Make "Welcome to ProDrive" Bigger
Change from `text-sm` to larger text styling for better visibility

### 7.3 Remove "10+ Years Experience" Badge
Remove the absolute positioned badge near the car image in the welcome section

### 7.4 Update WhatsApp Link
Change to: `https://wa.me/254748418583?text=Hello%20PRODRIVE%20SUSPENSION!%20I'm%20interested%20in%20your%20products.`

---

## 8. About Page Updates

### 8.1 Isaac Irungu Profile Picture
- Copy `user-uploads://image-2.png` to `src/assets/isaac-profile.png`
- Use as profile picture in Founder section

### 8.2 Make "Our Story" Section Bigger and Centered
- Increase heading size and center the text

### 8.3 Update Bio Text
- Remove "over 10" from: "Passionate about 4x4 vehicles and African off-road adventures for years"

### 8.4 Add Hover Interactivity to Images
- Add transform scale and shadow effects on hover for all images in the About page grid

---

## 9. Products Page Updates

### 9.1 Add New Product Images
Copy and add:
- `user-uploads://image-3.png` - Rotora Big Brake Kit (Black)
- `user-uploads://image-4.png` - Brembo Brake Kit (Yellow)
- `user-uploads://image-5.png` - Brembo Brake Kit (Blue)
- `user-uploads://image-6.png` - Brembo Brake Kit (Red)
- `user-uploads://image-7.png` - CRAGSMAN Coil Springs

### 9.2 Update Product Pricing
```text
- 2-inch lifted coil springs: KES 7,000 each
- Nitrogas shocks front: KES 13,000 each
- Nitrogas shocks rear: KES 10,000 each
- Modified upper control arms: KES 20,000 pair
- Adjustable sway bar links: KES 20,000 set
- Full braking kits: From KES 220,000 (depends on car model)
```

### 9.3 Add Vehicle Compatibility Info
**Shock Absorbers**: Fortuner, Landcruiser Prado 120 & 150 series, 4-Runner, FJ Cruiser, Hilux Vigo & Vevo (front only)

**Sway Bar Links**: Fortuner, Landcruiser Prado 120 & 150 series, 4-Runner, FJ Cruiser, Fortuner 2016+ model

**Springs**: Landcruiser Prado 120 & 150 series, 4-Runner, FJ Cruiser, Fortuner

**Upper Control Arms**: Landcruiser Prado 120 & 150 series, 4-Runner

### 9.4 Enhanced Hover Interactivity
- Add price highlight effects on hover
- Add scale and shadow transitions

---

## 10. Knowledge Center (Info Page) Updates

### 10.1 Replace Images with Videos
- Replace yellow car image with Video 1 (`user-uploads://Isaac_V1.mp4`)
- Replace second topic image with Video 2 (`user-uploads://Isaac_V2.mp4`)
- Copy videos to `public/videos/` folder

### 10.2 Replace Suspension Problems Image
- Copy `user-uploads://image-8.png` to `src/assets/mechanic-work.png`
- Use for "Common Suspension Problems" section

### 10.3 Video Implementation
```jsx
<video 
  src="/videos/Isaac_V1.mp4" 
  controls 
  className="rounded-2xl shadow-xl w-full"
  poster="/images/video-poster.jpg"
>
  Your browser does not support the video tag.
</video>
```

---

## 11. Responsive Centering

### 11.1 Ensure All Pages Are Centered
- Verify `container-custom` class is applied consistently
- Add `mx-auto` and proper max-width constraints
- Test responsive behavior on mobile, tablet, and desktop

### 11.2 Navigation Links Centered
- Ensure navigation items are properly centered on all screen sizes

---

## 12. Files to Create/Modify Summary

### New Files:
1. `src/components/ThemeToggle.tsx` - Dark/Light mode toggle
2. `public/favicon.png` - Custom favicon
3. `src/assets/logo.png` - ProDrive logo for navbar
4. `src/assets/isaac-profile.png` - Isaac's profile photo
5. `src/assets/products/brake-kit-black.png` - Rotora brake kit
6. `src/assets/products/brake-kit-yellow.png` - Brembo yellow
7. `src/assets/products/brake-kit-blue.png` - Brembo blue
8. `src/assets/products/brake-kit-red.png` - Brembo red
9. `src/assets/mechanic-work.png` - Mechanic working photo
10. `public/videos/Isaac_V1.mp4` - Video 1
11. `public/videos/Isaac_V2.mp4` - Video 2

### Modified Files:
1. `index.html` - Favicon and OG image updates
2. `src/App.tsx` - ThemeProvider wrapper
3. `src/components/layout/Navbar.tsx` - Logo image, theme toggle
4. `src/components/layout/Footer.tsx` - Contact info, TikTok, designer credit
5. `src/components/WhatsAppButton.tsx` - Updated phone and message
6. `src/pages/Home.tsx` - Remove scroll indicator, bigger welcome text, remove 10+ years
7. `src/pages/About.tsx` - Profile picture, centered story, hover effects
8. `src/pages/Products.tsx` - New products, pricing, compatibility, interactivity
9. `src/pages/Info.tsx` - Videos instead of images, new mechanic photo
10. `src/pages/Contact.tsx` - Updated phone, email, social links

---

## Technical Implementation Notes

### Theme Toggle Implementation
Using `next-themes` (already installed):
```tsx
// ThemeToggle.tsx
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};
```

### Video Hosting
Videos will be placed in the `public/videos/` directory for direct serving without bundling, which is more efficient for large media files.

### Image Optimization
All new product images will be imported as ES6 modules from `src/assets/` for proper bundling and optimization.
