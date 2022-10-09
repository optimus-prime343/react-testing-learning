import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('Greet.tsx', () => {
  describe('given a custom greet name', () => {
    it('should render the custom greet text', () => {
      const customGreetName = 'Howdy'
      render(<Greet name={customGreetName} />)
      expect(screen.getByText(customGreetName)).toBeInTheDocument()
    })
  })
  describe('given no custom greet name', () => {
    it('should render the default greet text', () => {
      render(<Greet />)
      expect(screen.getByText('Hello')).toBeInTheDocument()
    })
  })
})
