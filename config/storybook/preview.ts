import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/theme-provider'
import { RouterDecorator, StyleDecorator, ThemeDecorator } from 'shared/config/storybook'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      // default: 'dark',
      list: [
        { name: 'dark', class: Theme.DARK, color: '#ffffff' },
        { name: 'light', class: Theme.LIGHT, color: '#000000' },
      ],
    },
  },
}
export const decorators = [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT)]

export default preview
