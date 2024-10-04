export function formatCurrency(value: string): string {
  const regex = /(\bRUB\s+)([\d,]+)\.\d{2}/;
  return value.replace(regex, '$2 RUB');
}