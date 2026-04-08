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
        <section className="border-b border-slate-200/80 px-2 pb-10 pt-4 sm:px-4 sm:pb-12">
          <header className="mx-auto mb-8 max-w-4xl text-center">
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-cyan-900 bg-clip-text text-transparent">
                Color A Word
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Generate meaningful color palettes from any word.
            </p>
          </header>

          <div>
            <SearchInput onSearch={handleSearch} loading={loading} />
          </div>
        </section>

        {error && (
          <div className="mt-6 text-center text-red-500">
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
          <>
            <div className="mx-auto my-10 h-[2px] w-[520px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
            <ColorGrid colors={colors} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
