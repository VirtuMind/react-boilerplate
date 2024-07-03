import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>english</button>
      <button onClick={() => i18n.changeLanguage('fr')}>français</button>
    </>
  );
};

export default HomePage;
