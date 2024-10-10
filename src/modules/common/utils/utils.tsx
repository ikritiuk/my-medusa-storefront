export function formatCurrency(value: string): string {
  const regex = /(\bRUB\s+)([\d,]+)\.\d{2}/;
  return value.replace(regex, '$2 RUB').trim();
}

export function formatCurrencyX2(value: string): string {
  const regex = /(\d[\d,]*)/; // Matches the numeric part
  const match = value.match(regex);

  if (match) {
    const numericValue = parseFloat(match[0].replace(/,/g, '')); // Remove commas and convert to number
    const doubledValue = numericValue * 2; // Double the value
    return formatCurrency(doubledValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' RUB'); // Format back to currency
  }

  return value; // Return the original value if no match is found
}