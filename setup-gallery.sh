#!/bin/bash

# Photo Gallery Setup Helper Script
# This script helps you copy images from your Extras folder to the gallery

echo "📸 Hija Travels - Photo Gallery Setup"
echo "======================================"
echo ""

SOURCE_DIR="/Users/mohamedazwar/Desktop/Amhr/My_React/Projects/HijaTravels/Extras/Media/Trips/Landscape img size"
DEST_DIR="/Users/mohamedazwar/Desktop/Amhr/My_React/Projects/HijaTravels/hija_travels/public/gallery"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Source directory not found!"
    echo "Expected: $SOURCE_DIR"
    echo ""
    echo "Please update the SOURCE_DIR path in this script."
    exit 1
fi

# Count images in source
IMAGE_COUNT=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | wc -l)
echo "Found $IMAGE_COUNT images in source folder"
echo ""

# Ask for confirmation
read -p "Copy all images to gallery folder? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📂 Copying images..."

    # Copy images
    cp "$SOURCE_DIR"/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP} "$DEST_DIR/" 2>/dev/null

    echo "✅ Images copied successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Open /app/page.tsx"
    echo "2. Update the galleryImages array with your image filenames"
    echo "3. Run: npm run build"
    echo "4. Deploy: vercel --prod"
    echo ""
    echo "📝 See PHOTO_GALLERY_GUIDE.md for detailed instructions!"
else
    echo "❌ Operation cancelled"
fi

