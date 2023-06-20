import { lazy } from 'react'

// export const MainPageAsync = lazy(async () => import('./main-page'))
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500)
    }),
)
