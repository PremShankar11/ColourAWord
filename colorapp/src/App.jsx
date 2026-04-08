import { useState } from 'react';
import SearchInput from './components/SearchInput';
import ColorGrid from './components/ColorGrid';
import { fetchImagesAndExtractColors } from './utils/colorExtractor';

function App() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (word) => {
    if (!word.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const extractedColors = await fetchImagesAndExtractColors(word);
      setColors(extractedColors);
    } catch (err) {
      setError('Failed to fetch colors. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto w-full max-w-[1680px] px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Color A Word
          </h1>
          <p className="text-gray-600 text-lg">
            Transform words into visually meaningful color palettes
          </p>
        </header>

        <SearchInput onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="text-center text-red-500 mt-4">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading colors...</p>
          </div>
        )}

        {!loading && colors.length > 0 && (
          <ColorGrid colors={colors} />
        )}
      </div>
    </div>
  );
}

export default App;
