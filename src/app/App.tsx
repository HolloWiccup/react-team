import { useTheme } from './providers/theme-provider'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Suspense } from 'react'
import './styles/style.scss'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

export const App = () => {
  const { theme = '' } = useTheme()

  // useEffect(() => {
  //   if (Math.random() < 0.5) {
  //     throw new Error()
  //   }
  // })

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
