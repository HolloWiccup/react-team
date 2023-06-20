import 'app/styles/style.scss'
import { BrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'

// декоратор, который подключает глобальные стили
export const RouterDecorator = (story: () => ReactNode) => <BrowserRouter>{story()}</BrowserRouter>
