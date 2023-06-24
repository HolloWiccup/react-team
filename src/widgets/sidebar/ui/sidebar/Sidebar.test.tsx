import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'

describe('Sidebar', () => {
  test('render button', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    render(<SidebarWithTranslation />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
