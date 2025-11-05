# Setup Instructions

## ✅ Profile Picture Setup

To use your profile picture (`my.jpg`), follow these steps:

1. **Place your image file** in the `public` folder:
   ```
   portfolio/public/my.jpg
   ```

2. **The code is already updated** to use `/my.jpg` as your avatar URL.

3. **Verify the image:**
   - Make sure the file is named exactly `my.jpg` (case-sensitive)
   - Supported formats: JPG, JPEG, PNG
   - Recommended size: 200x200px or larger (square images work best)

## ✅ Resume Link

The resume link has been added to your portfolio:
- **Resume URL**: Added to contact section
- **Google Drive Link**: https://drive.google.com/file/d/1k7DR_D3MRxErg0l89V4O6k4tzERP2B9M/view?usp=sharing
- **Button**: "View Resume" button appears in the Contact section

## ✅ Projects Marked as "Coming Soon"

Three projects have been marked with "Coming Soon":
- Online Food Ordering System
- Interactive Calendar App  
- Java Chat Application

The descriptions now start with "**Coming Soon**" to indicate they're in progress.

## 📝 Next Steps

1. **Add your profile picture:**
   ```bash
   # Copy your my.jpg file to the public folder
   # Windows: Copy your file to portfolio\public\my.jpg
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to see your updates

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update profile picture, resume link, and mark projects as coming soon"
   git push origin main
   ```

## 🎨 Customization

You can customize:
- **Profile picture**: Replace `my.jpg` with any image name (update `avatarUrl` in `resume.tsx`)
- **Resume link**: Update `resumeUrl` in `resume.tsx` if you change the Google Drive link
- **Remove "Coming Soon"**: Edit project descriptions in `resume.tsx` to remove the "Coming Soon" text

