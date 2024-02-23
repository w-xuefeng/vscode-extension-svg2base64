export const base64Prefix = 'data:image/svg+xml;base64';

function toBase64(content: string): string {
  return Buffer.from(content).toString('base64');
}

export function svgToBase64(svgContent: string) {
  return `${base64Prefix},${toBase64(svgContent)}`;
}

export function base64ToSvgWrapped(base64: string) {
  const svgPrefix = '<svg p-id="from-svg2base64">';
  const svgSuffix = '</svg>';
  return `${svgPrefix}<image href="${base64}"></image>${svgSuffix}`;
}

export function svgToBase64WrapperSvg(svgContent: string) {
  const base64String = `${base64Prefix},${toBase64(svgContent)}`;
  const svgPrefix = svgContent.match(/<svg.+>/)?.at(0);
  const svgSuffix = '</svg>';
  return `${svgPrefix}<image href="${base64String}"></image>${svgSuffix}`;
}
