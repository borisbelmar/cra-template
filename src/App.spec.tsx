import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders dobleb link', () => {
    render(<App />)
    const linkElement = screen.getByText(/dobleB./i)
    expect(linkElement).toBeInTheDocument()
  })
})
