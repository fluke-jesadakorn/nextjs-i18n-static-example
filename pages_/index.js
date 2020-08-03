import { useTranslation } from 'next-translate'
import Router from 'next-translate/Router'

export default function Index() {
  const { t, lang } = useTranslation()
  const toggleLang = () => {
    if (lang === "en") {
      return "th"
    } else if (lang === 'th') {
      return "en"
    }
  }

  return (
    <div>
      <span>{t('common:title')}</span>
      <span>
        <button
          className="waves-effect waves-light btn"
          onClick={() => Router.pushI18n({ url: '/', options: { lang: toggleLang() } })}
        >
          Change to {toggleLang()}
        </button>
      </span>
    </div>
  )
}