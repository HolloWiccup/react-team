import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator'
import { Theme } from 'app/providers/theme-provider'
import { PageError } from './PageError'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'widget/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
}
