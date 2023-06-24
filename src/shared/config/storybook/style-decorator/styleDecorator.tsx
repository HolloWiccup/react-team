import { StoryFn } from '@storybook/react'
import 'app/styles/style.scss'

// декоратор, который подключает глобальные стили
export const StyleDecorator = (story: () => StoryFn) => story()
