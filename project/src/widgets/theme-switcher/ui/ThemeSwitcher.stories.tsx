import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator'
import { Theme } from 'app/providers/theme-provider'
import { ThemeSwitcher } from './ThemeSwitcher'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'widget/Themeswitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
}
