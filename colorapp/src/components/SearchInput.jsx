import { useState } from 'react';

function SearchInput({ onSearch, loading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3 rounded-[20px] bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition duration-200 ease-out focus-within:shadow-[0_8px_24px_rgba(15,23,42,0.10)] focus-within:ring-2 focus-within:ring-sky-300/60 sm:flex-row sm:items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a word (e.g., ocean, sunset, forest)..."
          className="min-h-14 flex-1 rounded-2xl border-0 bg-transparent px-5 py-4 text-base text-slate-900 outline-none placeholder:text-slate-400 sm:text-lg"
          disabled={loading}
          aria-label="Search for a word to generate a color palette"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="min-h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(14,165,233,0.26)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none sm:text-lg"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
