# Background Music Setup

This folder should contain your romantic background music file.

## Audio Requirements:
- **Format**: MP3 (best compatibility) or OGG
- **File Name**: background-music.mp3
- **Size**: Under 5MB for fast mobile loading (2-3MB ideal)
- **Length**: 2-5 minutes (will loop automatically)
- **Volume**: The website plays at 30% volume by default

## Recommended Royalty-Free Music Sources:

### 1. Pixabay Music Library (Easiest - No Attribution Required)
**Website**: https://pixabay.com/music/

**Recommended Track**:
- "Lo-fi Music Loop - Sentimental Jazzy Love" by Sonican
- Search URL: https://pixabay.com/music/search/romantic/
- License: Free for commercial use, no attribution required

**Other Good Searches**:
- "romantic piano"
- "love instrumental"
- "soft acoustic"
- "wedding music"

### 2. Free Music Archive
**Website**: https://freemusicarchive.org

**Search Terms**:
- "romantic piano"
- "acoustic love"
- "soft instrumental"

**Note**: Check individual track licenses (most are Creative Commons)

### 3. YouTube Audio Library
**Access**: https://studio.youtube.com (need Google account)
**Path**: YouTube Studio → Audio Library
**Search**: "romantic", "piano", "acoustic"
**License**: Most are royalty-free for all uses

### 4. Incompetech (Kevin MacLeod)
**Website**: https://incompetech.com/music/
**Search**: "romantic", "tender", "soft piano"
**License**: Creative Commons Attribution 4.0
**Note**: Requires attribution (add credit in your README)

## How to Add Music:

1. **Download your chosen track**
2. **Convert to MP3** if needed (use online converter like cloudconvert.com)
3. **Optimize file size** if over 5MB:
   - Use online tools like https://www.mp3smaller.com
   - Or use Audacity (free software) to export at lower bitrate (128kbps is fine)
4. **Rename file** to: `background-music.mp3`
5. **Place in this folder**: `/public/audio/background-music.mp3`

## Testing:

After adding your music file:
1. Run `npm run dev`
2. Open http://localhost:3000
3. Click "Begin Our Story" button
4. Music should start playing automatically
5. Test the mute/unmute button (top-right corner)

## Troubleshooting:

**Music not playing?**
- Check the file is named exactly `background-music.mp3`
- Check it's in the correct folder: `/public/audio/`
- Check browser console for errors (F12)
- Try a different browser (Chrome/Safari/Firefox)

**Music too loud/quiet?**
- Edit the volume in: `app/components/AudioProvider.tsx`
- Look for: `volume: 0.3` (0.0 = silent, 1.0 = full volume)

---

**Note**: Until you add a music file, the audio system will load but play nothing. The site will still work without music, but you'll see console errors about missing audio file.
