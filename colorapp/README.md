# Color A Word

A data-driven React application that transforms words into visually meaningful color palettes using real-world image data.

## 🎨 Overview

This application converts a word into a color palette by leveraging the Unsplash API to fetch semantically relevant images and extracting dominant colors using node-vibrant. This ensures that the generated colors are contextually accurate, dynamic, and scalable.

## 🚀 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS + CSS Grid
- **Image Source**: Unsplash API
- **Color Extraction**: node-vibrant
- **HTTP Client**: Axios

## 📊 Dataset Justification

We use Unsplash image results as a visual dataset. Dominant colors extracted from these images represent the semantic meaning of the input word. This approach ensures:

- Colors are derived from real visual context
- Output is dynamic and data-driven
- Results are scalable for any input word
- Colors have meaningful relationships to the search term

## ✨ Features

- **Word-to-Color Transformation**: Enter any word and get a relevant color palette
- **Copy to Clipboard**: Click any color card to copy its hex code
- **Hover Effects**: Smooth transitions and visual feedback
- **Loading States**: Professional loading indicators during API calls
- **Responsive Design**: Works beautifully on all screen sizes
- **Error Handling**: Graceful fallbacks for failed requests

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 20.17+ 
- npm or yarn
- Unsplash API Access Key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your Unsplash API key:
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Create a new application
   - Copy your Access Key

4. Update the API key in `src/utils/colorExtractor.js`:
   ```javascript
   const UNSPLASH_ACCESS_KEY = 'your_access_key_here';
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser to `http://localhost:5173`

## 🏗️ Project Structure

```
colorapp/
├── src/
│   ├── components/
│   │   ├── SearchInput.jsx    # Input field component
│   │   ├── ColorGrid.jsx      # Grid layout for colors
│   │   └── ColorCard.jsx      # Individual color card
│   ├── utils/
│   │   └── colorExtractor.js  # API & color extraction logic
│   ├── App.jsx                # Main application component
│   └── index.css              # Tailwind imports
├── tailwind.config.js
└── vite.config.js
```

## 🔄 How It Works

1. **User Input**: User enters a word (e.g., "ocean", "sunset", "forest")
2. **Fetch Images**: Application queries Unsplash API for relevant images
3. **Extract Colors**: node-vibrant analyzes each image and extracts vibrant, muted, light, and dark color variations
4. **Filter & Display**: Colors are deduplicated and displayed in a responsive grid
5. **Interaction**: Users can click to copy hex codes

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Deploy to Vercel, Netlify, or any static hosting service.

## 📝 License

MIT
