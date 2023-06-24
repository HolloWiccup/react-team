import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/theme-provider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'shared/Applink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
}
export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
}
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
}
export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
}
