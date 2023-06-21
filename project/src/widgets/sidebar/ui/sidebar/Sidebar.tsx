import { classNames } from 'shared/lib'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/theme-switcher'
import { LangSwitcher } from 'widgets/lang-swicther'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

type SidebarProps = {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid='sidebar-toggle' onClick={onToggle}>
        {t('Переключить')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
