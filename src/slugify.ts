export function slugify(source: string): string {
  const result = source.replace(' ', '_').replace('!', '').replace('ñ', '-');
  return result.toLowerCase();
}
