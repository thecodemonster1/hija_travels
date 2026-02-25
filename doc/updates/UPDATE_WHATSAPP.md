# 📱 How to Update Your WhatsApp Number

## Quick Find & Replace Guide

Your current WhatsApp number in the code is: **+94 77 123 4567** (Format: `94771234567`)

### Step 1: Decide Your Format

WhatsApp links use this format:
```
https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]
```

Example for Sri Lanka (+94):
- If your number is: **077 123 4567**
- WhatsApp format: **94771234567** (remove the leading 0, add country code)

### Step 2: Find & Replace

Search for: `94771234567`  
Replace with: `YOUR_NUMBER_HERE`

**Files to update:**
1. `/app/page.tsx` - (8 occurrences)
2. `/components/layout/Header.tsx` - (4 occurrences)  
3. `/components/layout/Footer.tsx` - (3 occurrences)

### Step 3: Update Display Format

Also search for: `+94 77 123 4567`  
Replace with: Your formatted number (e.g., `+94 77 XXX XXXX`)

### Using VS Code / Your Editor

1. Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows/Linux)
2. Type: `94771234567`
3. Click "Replace All"
4. Type your new number
5. Click the replace button

### Manual Update Locations

#### In `app/page.tsx`:
- Line ~125: Hero WhatsApp button
- Line ~143: Hero secondary button
- Line ~349: Vehicle booking button
- Line ~477: Final CTA WhatsApp button
- Line ~485: Phone call link

#### In `components/layout/Header.tsx`:
- Line ~17: Desktop phone link
- Line ~23: Desktop WhatsApp button
- Line ~34: Mobile phone link
- Line ~40: Mobile WhatsApp button

#### In `components/layout/Footer.tsx`:
- Line ~36: WhatsApp link with text
- Line ~48: Phone call link
- Line ~53: Email (keep as is)
- Line ~97: Footer CTA WhatsApp button

### Step 4: Test Everything

After updating, click each button/link to verify:
- ✅ WhatsApp opens correctly
- ✅ Phone dialer works
- ✅ Pre-filled messages appear
- ✅ Number displays correctly everywhere

### Pre-filled Messages

You can customize the WhatsApp message text in each link:

Current examples:
- "Hi! I'm interested in exploring Sri Lanka with Hija Travels"
- "Hi Hija Travels! I'm interested in exploring Sri Lanka. Can you help me plan my trip?"
- "Hi! I'd like to know more about your vehicles and pricing"

Format:
```
https://wa.me/94771234567?text=Your%20custom%20message%20here
```

(Spaces = %20 in URLs)

### Quick Command Line Replace

If you prefer terminal:

```bash
# Navigate to project folder
cd /Users/mohamedazwar/Desktop/Amhr/My_React/Projects/HijaTravels/hija_travels

# Replace all occurrences (Mac/Linux)
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" -exec sed -i '' 's/94771234567/YOUR_NEW_NUMBER/g' {} +

# For display format
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" -exec sed -i '' 's/\+94 77 123 4567/+94 XX XXX XXXX/g' {} +
```

**⚠️ Warning**: Test the command on a backup first!

### After Updating

1. Save all files
2. Restart dev server: `npm run dev`
3. Test on your phone by scanning QR code or visiting the local network URL
4. Click every WhatsApp button to confirm it works
5. Deploy when ready!

---

**Need Help?** The WhatsApp number format for Sri Lanka is:
- Full: +94 XX XXX XXXX
- For links: 94XXXXXXXXX (no + or spaces)

Example:
- Display: +94 77 123 4567
- In code: 94771234567
