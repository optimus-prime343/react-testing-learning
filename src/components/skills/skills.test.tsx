import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import { Skills } from './skills'

const SKILLS = ['JavaScript', 'TypeScript', 'React', 'Python'] as const
const TOTAL_SKILLS = SKILLS.length

const setup = () => render(<Skills skills={SKILLS} />)

describe('Skills', () => {
  beforeEach(setup)

  it('renders correctly', () => {
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  it('renders the correct number of skills', () => {
    const listElementItems = screen.getAllByRole('listitem')
    expect(listElementItems).toHaveLength(TOTAL_SKILLS)
  })
  describe('given the user is not logged in', () => {
    it('renders the login button initially', () => {
      const loginButton = screen.getByRole('button', { name: /login/i })
      expect(loginButton).toBeInTheDocument()
    })
    it("doesn't render the start learning button initially", () => {
      const startLearningButton = screen.queryByRole('button', {
        name: /start learning/i,
      })
      expect(startLearningButton).not.toBeInTheDocument()
    })
  })
  describe('given the user is logged in', () => {
    it('renders the start learning button', async () => {
      const loginButton = screen.getByRole('button', { name: /login/i })
      await user.click(loginButton)
      const startLearningButton = await screen.findByRole('button', {
        name: /start learning/i,
      })
      expect(startLearningButton).toBeInTheDocument()
    })
  })
})
