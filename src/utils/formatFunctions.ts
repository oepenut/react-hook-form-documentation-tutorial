export function capitalizeFirstLetter(value: string): string {
  return value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}
