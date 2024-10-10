export function formatCurrency(value: string): string {
  const regex = /(\bRUB\s+)([\d,]+)\.\d{2}/;
  return value.replace(regex, '$2 RUB').trim();
}

export function formatCurrencyToNumber(value: string): number {
  const regex = /(\d[\d,]*)/; // Matches numeric values, including commas
  const match = value.match(regex);
  return match ? parseFloat(match[0].replace(/,/g, '')) : NaN; // Convert to number and remove commas
}