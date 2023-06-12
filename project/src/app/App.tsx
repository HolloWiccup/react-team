import { useTheme } from './providers/theme-provider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { Suspense } from 'react'
import { Navbar, Sidebar } from 'widgets'
import './styles/style.scss'

export const App = () => {
  const { theme = '' } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
