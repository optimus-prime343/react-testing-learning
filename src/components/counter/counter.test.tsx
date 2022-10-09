import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import { Counter } from './counter'

const setup = () => render(<Counter />)

describe('Counter', () => {
  beforeEach(setup)

  it('renders correctly', () => {
    const countElement = screen.getByText('Count : 0')
    expect(countElement).toBeInTheDocument()
  })
  describe('when the increment button is clicked', () => {
    it('increments the count', async () => {
      const incrementButton = screen.getByRole('button', { name: /increment/i })
      await user.click(incrementButton)
      const countElement = screen.getByText('Count : 1')
      expect(countElement).toBeInTheDocument()
    })
  })
  describe('when the decrement button is clicked', () => {
    it('decrements the count', async () => {
      const decrementButton = screen.getByRole('button', { name: /decrement/i })
      await user.click(decrementButton)
      const countElement = screen.getByText('Count : -1')
      expect(countElement).toBeInTheDocument()
    })
  })
  describe('when the increment button is clicked twice', () => {
    it('increments the count by twice', async () => {
      const incrementButton = screen.getByRole('button', { name: /increment/i })
      await user.dblClick(incrementButton)
      const countElement = screen.getByText('Count : 2')
      expect(countElement).toBeInTheDocument()
    })
  })
})
