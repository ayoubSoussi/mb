# SETUP INSTRUCTIONS

## ⚠️ Important: Node.js Version Requirement

The build currently fails because Next.js 16 requires Node.js version **20.9.0 or higher**.
Your system has Node.js **18.19.1**.

### Option 1: Update Node.js (Recommended)

Using **nvm** (Node Version Manager):
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20

# Verify version
node --version  # Should show v20.x.x

# Now try building again
cd /home/ayoub/myspace/perso/maryam-bakkar
npm run build
```

### Option 2: Downgrade Next.js (Quick Fix)

If you can't upgrade Node.js right now:
```bash
cd /home/ayoub/myspace/perso/maryam-bakkar
npm install next@14 react@18 react-dom@18
npm run build
```

## 📦 What's Been Created

✅ Next.js project with TypeScript and Tailwind CSS
✅ Splash screen with "Begin Our Story" button
✅ 10 story pages with romantic content
✅ Audio system with Howler.js (mute/unmute controls)
✅ Framer Motion animations for smooth transitions
✅ GitHub Actions deployment workflow
✅ Mobile-responsive design
✅ Placeholder images (10 rose-colored placeholders)

## 🎵 Adding Background Music

1. Download romantic music from Pixabay:
   - Visit: https://pixabay.com/music/beats-lo-fi-music-loop-sentimental-jazzy-love-473154/
   - Or search: https://pixabay.com/music/search/romantic/

2. Save as `background-music.mp3` in `/public/audio/`

3. Keep file under 5MB for mobile

## 🖼️ Adding Your Own Images

Replace placeholder images in `/public/images/`:
- Download romantic couple photos from Unsplash or Pexels
- Or use your own photos with Maryam
- Name them: `page-1.jpg` through `page-10.jpg`
- Optimize to under 200KB each

## 🚀 GitHub Pages Deployment

### Step 1: Create GitHub Repository
```bash
# The git repo is already initialized
cd /home/ayoub/myspace/perso/maryam-bakkar

# Add all files
git add .
git commit -m "Initial commit: Our Love Story website"

# Create repo on GitHub (use your browser):
# Go to: https://github.com/new
# Repository name: maryam-bakkar
# Make it Private (recommended for personal gift)
# Don't initialize with README

# Add remote and push
git remote add origin https://github.com/ayoubsoussi/maryam-bakkar.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. The workflow will automatically deploy on push

### Step 3: Access Your Site

After the GitHub Action completes (2-3 minutes):
- **URL**: https://ayoubsoussi.github.io/maryam-bakkar

## 🧪 Test Locally (After Node.js Update)

```bash
cd /home/ayoub/myspace/perso/maryam-bakkar

# Development mode
npm run dev
# Visit: http://localhost:3000

# Production build
npm run build
npm run start
```

## 📱 Mobile Testing

Before sending to Maryam, test on your phone:
1. Build and deploy to GitHub Pages
2. Open the URL on your phone
3. Test touch interactions and audio
4. Ensure all pages load correctly

## ✏️ Customization

### Update Story Text
Edit: `app/story/storyData.ts`

### Change Colors
Edit: `app/globals.css` (rose colors defined in :root)

### Adjust Audio Volume
Edit: `app/components/AudioProvider.tsx` (look for `volume: 0.3`)

## 🎁 Valentine's Day Reveal Ideas

1. **QR Code Card**: Generate QR code pointing to your site, print on Valentine's card
2. **Text Message**: Send the link with a sweet message
3. **Scavenger Hunt**: Final clue reveals the website URL
4. **Laptop Surprise**: Open it on laptop and show her in person

## 📋 Checklist Before Sharing

- [ ] Node.js updated to v20+
- [ ] Site builds successfully (`npm run build`)
- [ ] Background music added
- [ ] Real images added (or keep placeholders)
- [ ] Story text reviewed for accuracy
- [ ] Deployed to GitHub Pages
- [ ] Tested on mobile device
- [ ] Audio works on mobile (tap "Begin Our Story")
- [ ] All 10 pages load correctly
- [ ] Mute/unmute button works

## 🆘 Troubleshooting

**Build fails?**
- Update Node.js to v20+ (see Option 1 above)
- Or downgrade Next.js (see Option 2 above)

**Images not showing?**
- Check files are named exactly `page-1.jpg` through `page-10.jpg`
- Check they're in `/public/images/` folder

**Audio not playing?**
- Add `background-music.mp3` to `/public/audio/`
- Must click "Begin Our Story" button (required for mobile)
- Check mute button isn't activated

**GitHub Pages not working?**
- Ensure GitHub Actions is enabled in repo settings
- Check Actions tab for deployment status
- Verify repository name matches basePath in next.config.ts

---

**Happy Valentine's Day! 💕**
