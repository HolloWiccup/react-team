import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'
import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
}
export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
  },
}

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
}
export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
}
