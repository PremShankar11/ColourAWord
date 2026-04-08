import ColorCard from './ColorCard';

function ColorGrid({ colors }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Color Palette ({colors.length} colors)
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <ColorCard key={`${color}-${index}`} color={color} />
        ))}
      </div>
    </div>
  );
}

export default ColorGrid;
