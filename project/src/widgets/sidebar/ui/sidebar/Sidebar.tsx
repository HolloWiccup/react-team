import { classNames } from 'shared'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { LangSwitcher, ThemeSwitcher } from 'widgets'

type SidebarProps = {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
