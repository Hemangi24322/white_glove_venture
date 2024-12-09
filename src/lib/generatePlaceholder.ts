export function generatePlaceholderSVG(width: number, height: number): string {
    const svg = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1F2937"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6B7280" dominant-baseline="middle" text-anchor="middle">
          ${width}x${height}
        </text>
      </svg>
    `
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  }
  
  