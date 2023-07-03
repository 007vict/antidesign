import Monitor from './pages/Monitor'
import React, {useState} from "react";
import {ConfigProvider, theme, Radio} from "antd";
import {AffixTheme} from "./components/AffixTheme/AffixTheme";
import enUS from 'antd/locale/en_US';
import ruRU from 'antd/locale/ru_RU'
import frFR from 'antd/locale/fr_FR'
import zhCN from 'antd/locale/zh_CN';
import deDE from 'antd/locale/de_DE'
import byBY from "antd/locale/by_BY"
import ptPT from "antd/locale/pt_PT"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import i18n from "i18next";

dayjs.locale('en');

function App() {
  const [themeCustom, setThemeCustom] = useState(false);

  const [localeOwnLand, setLocaleOwnLand] = useState('en');
  const [locale, setLocal] = useState(enUS);

  const changeLocale = (e) => {
    console.log(e.target.value)
    const localeValue = e.target.value;
    i18n.changeLanguage(e.target.value.locale)
    setLocaleOwnLand(e.target.value.locale)
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };

  return (
    <div>
      <ConfigProvider
        locale={locale}
        theme={{
          algorithm: themeCustom === false ? theme.defaultAlgorithm : theme.darkAlgorithm
        }}
      >
          <Radio.Group buttonStyle={'solid'} value={locale} onChange={changeLocale}>
            <Radio.Button key="ru" value={ruRU} onClick={() => console.log('btn')}>
              Русский
            </Radio.Button>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="fr" value={frFR}>
              French
            </Radio.Button>
            <Radio.Button key="de" value={deDE}>
              Deutsch
            </Radio.Button>
            <Radio.Button key="by" value={byBY}>
              Belarus
            </Radio.Button>
            <Radio.Button key="pt" value={ptPT}>
              Portugal
            </Radio.Button>
            <Radio.Button key="zh" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>

          <AffixTheme themeCustom={themeCustom} setThemeCustom={setThemeCustom}/>
          <Monitor themeCustom={themeCustom}/>
      </ConfigProvider>
    </div>
  );
}

export default App;
