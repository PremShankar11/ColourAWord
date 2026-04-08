import { useState } from 'react';

function SearchInput({ onSearch, loading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a word (e.g., ocean, sunset, forest)..."
          className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
