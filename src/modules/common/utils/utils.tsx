export function formatCurrency(value) {
  // Trim any extra whitespace from the input
  value = value.trim();

  // Update the regex to match the desired format
  const regex = /(\bRUB\s+)([\d,]+)/;
  return value.replace(regex, '$2 RUB');
}