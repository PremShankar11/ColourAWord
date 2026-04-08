import { useState } from 'react';
import { getCardHeight, getChipStyle, getTextColor } from '../utils/colorMetrics';

function ColorCard({ color, relevance, sortMode }) {
  const [copied, setCopied] = useState(false);
  const cardHeight = getCardHeight(color);
  const chipStyle = getChipStyle(color);
  const overlayTextColor = getTextColor(color);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/70 shadow-[0_4px_12px_rgba(15,23,42,0.08)] cursor-pointer transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_30px_rgba(15,23,42,0.18)]"
      style={{ backgroundColor: color, height: `${cardHeight}px` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div
          className="inline-flex items-center rounded-full px-3 py-1.5 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-2px]"
          style={chipStyle}
        >
          <span className="font-mono text-xs font-semibold tracking-wide">
            {color}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <span
          className="rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wide backdrop-blur-sm"
          style={{
            backgroundColor: copied ? 'rgba(15, 23, 42, 0.68)' : 'rgba(255, 255, 255, 0.24)',
            color: copied ? '#ffffff' : overlayTextColor,
          }}
        >
          {copied ? 'Copied!' : sortMode === 'relevance' ? `Relevance ${relevance}` : 'Copy color'}
        </span>
      </div>
    </div>
  );
}

export default ColorCard;
