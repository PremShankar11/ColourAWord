import axios from 'axios';
import { Vibrant } from 'node-vibrant/browser';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || 'YOUR_UNSPLASH_ACCESS_KEY';

const extractColorsFromImage = async (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    
    img.onload = async () => {
      try {
        const palette = await Vibrant.from(img).getPalette();
        
        const colors = [];
        if (palette.Vibrant) colors.push(palette.Vibrant.hex);
        if (palette.DarkVibrant) colors.push(palette.DarkVibrant.hex);
        if (palette.LightVibrant) colors.push(palette.LightVibrant.hex);
        if (palette.Muted) colors.push(palette.Muted.hex);
        if (palette.DarkMuted) colors.push(palette.DarkMuted.hex);
        if (palette.LightMuted) colors.push(palette.LightMuted.hex);
        
        resolve(colors);
      } catch (err) {
        console.error('Error extracting colors:', err);
        resolve([]);
      }
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', imageUrl);
      resolve([]);
    };
  });
};

export const fetchImagesAndExtractColors = async (word) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: word,
        per_page: 10,
        orientation: 'landscape'
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    const images = response.data.results;
    
    if (images.length === 0) {
      throw new Error('No images found');
    }

    // Extract colors from all images
    const colorPromises = images.map(img => 
      extractColorsFromImage(img.urls.small)
    );

    const colorArrays = await Promise.all(colorPromises);
    const allColors = colorArrays.flat();
    
    // Remove duplicates
    const uniqueColors = [...new Set(allColors)];
    
    return uniqueColors;
  } catch (error) {
    console.error('Error fetching colors:', error);
    throw error;
  }
};
