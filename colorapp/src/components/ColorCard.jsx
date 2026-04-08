import { useState } from 'react';

function ColorCard({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="relative h-32 rounded-lg shadow-md cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all rounded-lg">
        <span className="text-white font-mono text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity">
          {copied ? 'Copied!' : color}
        </span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 text-center">
        <span className="text-xs font-mono bg-white bg-opacity-90 px-2 py-1 rounded">
          {color}
        </span>
      </div>
    </div>
  );
}

export default ColorCard;
