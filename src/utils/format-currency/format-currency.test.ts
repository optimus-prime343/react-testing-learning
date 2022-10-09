import { formatCurrency } from './format-currency'

describe('formatCurrency', () => {
  describe('given a invalid number', () => {
    it('throws an error', () => {
      expect(() => formatCurrency('invalid')).toThrowError({
        name: 'Error',
        message: 'Invalid currency',
      })
    })
  })
  describe('given a valid currency string', () => {
    it('returns a formatted currency', () => {
      expect(formatCurrency('300')).toBe('$300.00')
    })
  })
  describe('given a currency number', () => {
    it('returns a formatted currency', () => {
      expect(formatCurrency(300)).toBe('$300.00')
    })
  })
})
