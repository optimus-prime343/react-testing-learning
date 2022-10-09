import { render, screen } from '@testing-library/react'
import { Application } from './application'

const setup = () => render(<Application />)

describe('Application', () => {
  beforeEach(setup)
  it('renders primary heading correctly', () => {
    const primaryHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(primaryHeading).toBeInTheDocument()
  })
  it('renders secondary heading correctly', () => {
    const secondaryHeading = screen.getByRole('heading', { level: 2 })
    expect(secondaryHeading).toBeInTheDocument()
  })
  it('renders the text correctly', () => {
    const text = screen.getByText(/all fields are mandatory/i)
    expect(text).toBeInTheDocument()
  })
  it('renders image correctly', () => {
    const image = screen.getByAltText(/a person with a laptop/i)
    expect(image).toBeInTheDocument()
  })
  it('renders name input correctly', () => {
    const nameInput = screen.getByRole('textbox', { name: /name/i })
    expect(nameInput).toBeInTheDocument()
  })
  it('renders textarea correctly', () => {
    const bioTextareaInput = screen.getByRole('textbox', { name: /bio/i })
    expect(bioTextareaInput).toBeInTheDocument()
  })
  it('renders select field correctly', () => {
    const jobLocationSelect = screen.getByRole('combobox')
    expect(jobLocationSelect).toBeInTheDocument()
  })
  it('renders checkbox correctly', () => {
    const termsAndConditionsCheckbox = screen.getByRole('checkbox')
    expect(termsAndConditionsCheckbox).toBeInTheDocument()
  })
  it('renders the disabled submit button correctly', () => {
    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })
})
