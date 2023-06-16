import { classNames } from 'shared/lib'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

type LangSwitcherProps = {
  className?: string
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      type='button'
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  )
}
