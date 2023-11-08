import { useTranslation } from "react-i18next";

import ScrollToTopButton from "../components/layouts/ScrollToTopButton";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>Home
      <h1>{t("welcome")}</h1>
      <p className="mt-20 p-6">hello</p>
      <ScrollToTopButton/>
    </div>
  )
}

export default Home