import { lazy } from 'react'
//
// export const AboutPageAsync = lazy(async () => import('./about-page'))

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./about-page')), 1500)
    }),
)
