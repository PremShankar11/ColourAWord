# Color A Word

A data-driven React application that transforms words into visually meaningful color palettes using real-world image data.

## 🌐 Live Demo

**[View Live Application](https://colour-a-word.vercel.app/)**

Try it now! Enter any word like "ocean", "sunset", or "forest" to see the magic happen.

## 🎨 Overview

This application converts a word into a visually meaningful color palette by leveraging real-world image data. We use the Unsplash API to fetch semantically relevant images and extract dominant colors using node-vibrant. This ensures that the generated colors are contextually accurate, dynamic, and scalable, rather than predefined or random.

## 🚀 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS + CSS Grid
- **Image Source**: Unsplash API
- **Color Extraction**: node-vibrant
- **HTTP Client**: Axios

### Why This Stack?

**React (Vite)**
- Handles dynamic UI updates (input → API → render)
- Clean component structure (Input, Grid, Card)
- Industry-standard with blazing-fast HMR

**Unsplash API**
- Converts word → real-world visual meaning
- High-quality images → better color relevance
- Scalable for any input word

**node-vibrant**
- Extracts multiple dominant colors (Vibrant, Muted, Light, Dark variations)
- More meaningful than single color extraction
- Enables visually rich output with 6 color variations per image

**Tailwind CSS + CSS Grid**
- Fast UI development
- Responsive grid layout
- Clean, modern design

## 📊 Dataset Justification

**We use Unsplash image results as a visual dataset.** Dominant colors extracted from these images represent the semantic meaning of the input word. This approach ensures:

- **Colors are not random** - They are derived from real visual context
- **Output is dynamic** - Different words produce different palettes
- **Data-driven approach** - Colors have meaningful relationships to the search term
- **Scalable** - Works for any input word without predefined mappings

### How the Dataset Relation Works

1. User enters a word (e.g., "ocean")
2. Unsplash API returns images semantically related to "ocean"
3. node-vibrant analyzes pixel data from these images
4. Dominant colors are extracted, representing the visual essence of "ocean"
5. Result: Blues, teals, and aqua tones that truly represent the ocean

This dataset-driven approach ensures colors are contextually accurate rather than arbitrary.

## ✨ Features

### Core Features
- **Word-to-Color Transformation**: Enter any word and get a relevant color palette
- **Semantic Color Extraction**: Colors derived from real-world image semantics
- **Responsive Grid Layout**: Beautiful masonry-style color card display
- **Color Cards**: Each card displays the color with its hex code

### UX Enhancements
- **Copy to Clipboard**: Click any color card to copy its hex code
- **Hover Effects**: Smooth transitions and visual feedback on interaction
- **Loading States**: Professional loading indicators during API calls
- **Error Handling**: Graceful fallbacks for failed requests with helpful messages
- **Responsive Design**: Works beautifully on all screen sizes (mobile to desktop)

## 🔄 How It Works

### Pipeline Flow

```
User Input (word)
        ↓
Fetch images (Unsplash API)
        ↓
Extract colors (node-vibrant)
        ↓
Filter & deduplicate colors
        ↓
Render responsive grid of color cards
```

### Detailed Process

1. **User Input**: User enters a word (e.g., "sunset", "forest", "ocean")
2. **Fetch Images**: Application queries Unsplash API for 10 semantically relevant images
3. **Extract Colors**: node-vibrant analyzes each image and extracts 6 color variations:
   - Vibrant
   - Dark Vibrant
   - Light Vibrant
   - Muted
   - Dark Muted
   - Light Muted
4. **Filter & Display**: Colors are deduplicated and displayed in a responsive grid
5. **Interaction**: Users can click any color to copy its hex code to clipboard

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 20.17+ 
- npm or yarn
- Unsplash API Access Key

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd colorapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your Unsplash API key:
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Create a new application
   - Copy your Access Key

4. Create a `.env` file in the root directory:
   ```bash
   VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
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
│   │   ├── SearchInput.jsx    # Input field component with form handling
│   │   ├── ColorGrid.jsx      # Grid layout for color display
│   │   └── ColorCard.jsx      # Individual color card with copy functionality
│   ├── utils/
│   │   └── colorExtractor.js  # Unsplash API integration & color extraction
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Tailwind CSS imports
├── public/
├── .env                       # Environment variables (not in git)
├── .env.example               # Example environment file
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── package.json
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package for deployment

### Environment Variables

Remember to set `VITE_UNSPLASH_ACCESS_KEY` in your deployment platform's environment variables.

## 🎯 Key Technical Decisions

### Why node-vibrant over other color extraction libraries?

- Extracts 6 distinct color variations (vibrant, muted, light, dark)
- Better color quality and semantic relevance
- Works well with modern ES modules and Vite
- Provides rich, diverse palettes from each image

### Why Unsplash API?

- High-quality, curated images
- Excellent semantic search results
- Free tier suitable for development and demos
- CORS-friendly for browser-based extraction

### Architecture Highlights

- **Component-based**: Clean separation of concerns
- **Async handling**: Proper loading states and error boundaries
- **Performance**: Efficient color extraction with deduplication
- **UX-focused**: Copy-to-clipboard, hover effects, responsive design

## 📝 Future Enhancements

- Color sorting by brightness/hue
- Save/bookmark favorite palettes
- Export palette as JSON/CSS
- Color accessibility metrics (contrast ratios)

## 📄 License

MIT

---

**Built with ❤️ using React, Vite, Tailwind CSS, and the Unsplash API**
