export const formatCurrency = (currency: string | number) => {
  const currencyNumber = typeof currency === 'string' ? parseInt(currency) : currency
  if (isNaN(currencyNumber)) throw new Error('Invalid currency')
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  })
  return currencyFormatter.format(currencyNumber)
}
