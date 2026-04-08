const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const getRgbChannels = (hex) => {
  const normalized = hex.replace('#', '');

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
};

export const getBrightness = (hex) => {
  const { r, g, b } = getRgbChannels(hex);
  return (r * 299 + g * 587 + b * 114) / 1000;
};

export const simplifyHexColor = (hex) => {
  const { r, g, b } = getRgbChannels(hex);
  const round = (value) => clamp(Math.round(value / 32) * 32, 0, 255);
  const toHex = (value) => value.toString(16).padStart(2, '0');

  return `#${toHex(round(r))}${toHex(round(g))}${toHex(round(b))}`;
};

export const getDeterministicOffset = (hex) => {
  const normalized = hex.replace('#', '');
  let hash = 0;

  for (const char of normalized) {
    hash = (hash * 31 + char.charCodeAt(0)) % 37;
  }

  return hash;
};

export const getCardHeight = (hex) => {
  const brightness = getBrightness(hex);
  const baseHeight = 330 - brightness * 0.72;
  const offset = getDeterministicOffset(hex) * 2.2;

  return Math.round(clamp(baseHeight + offset, 150, 360));
};

export const getTextColor = (hex) => {
  return getBrightness(hex) > 145 ? '#0f172a' : '#ffffff';
};

export const getChipStyle = (hex) => {
  if (getBrightness(hex) > 160) {
    return {
      backgroundColor: 'rgba(255, 255, 255, 0.64)',
      color: '#0f172a',
    };
  }

  return {
    backgroundColor: 'rgba(15, 23, 42, 0.34)',
    color: '#ffffff',
  };
};
