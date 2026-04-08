import { useMemo, useState } from 'react';
import ColorCard from './ColorCard';

function ColorGrid({ colors }) {
  const [sortMode, setSortMode] = useState('palette');

  const displayedColors = useMemo(() => {
    if (sortMode === 'relevance') {
      return [...colors].sort((a, b) => {
        if (b.relevance !== a.relevance) {
          return b.relevance - a.relevance;
        }

        return a.originalIndex - b.originalIndex;
      });
    }

    return [...colors].sort((a, b) => a.originalIndex - b.originalIndex);
  }, [colors, sortMode]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
        Color Palette ({colors.length} colors)
      </h2>
      <div className="mb-8 flex flex-col items-center gap-4">
        <p className="text-center text-sm text-gray-500">
          Click any swatch to copy its hex code
        </p>
        <div className="inline-flex rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setSortMode('palette')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              sortMode === 'palette'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Natural order
          </button>
          <button
            type="button"
            onClick={() => setSortMode('relevance')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              sortMode === 'relevance'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Relevant first
          </button>
        </div>
      </div>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
        {displayedColors.map((color) => (
          <ColorCard
            key={`${color.hex}-${color.originalIndex}`}
            color={color.hex}
            relevance={color.relevance}
            sortMode={sortMode}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorGrid;
