import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Dashboard": "Dashboard",
      "Projects": "Projects",
      "Form": "Form",
      "List": "List",
      "Team": "Team",
      "Files": "Files"
    }
  },
  ru: {
    translation: {
      "Dashboard": "Панель",
      "Projects": "Проекты",
      "Form": "Формы",
      "List": "Список",
      "Team": "Команда",
      "Files": "Файлы"
    }
  },
  fr: {
    translation: {
      "Dashboard": "Tableau de bord",
      "Projects": "Projets",
      "Form": "Former",
      "List": "Liste",
      "Team": "Équipe",
      "Files": "Des dossiers"
    }
  },
  de : {
    translation : {
      "Dashboard": "Armaturenbrett",
      "Files": "Dateien",
      "Form": "Form",
      "List": "Liste",
      "Projects": "Projekte",
      "Team": "Team"
    }
  },
  by : {
    translation: {
      "Dashboard": "Панэль кіравання",
      "Projects": "Праекты",
      "Form": "Формы",
      "List": "Список",
      "Team": "Спіс",
      "Files": "Файлы"
    }
  },
  pt : {
    translation: {
      "Dashboard": "Painel",
      "Files": "Ficheiros",
      "Form": "Formulário",
      "List": "Lista",
      "Projects": "Projetos",
      "Team": "Equipe"
    }
  },
  zh : {
    translation: {
      "Dashboard": "儀表板",
      "Projects": "进行中的项目",
      "Form": "表单页",
      "List": "列表页",
      "Team": "團隊",
      "Files": "文件"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
      },
    })

export default i18n

