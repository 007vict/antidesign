import React from "react";
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {FaAvianex} from "react-icons/fa";
import {TbBrandSpeedtest} from "react-icons/tb"
import {RxPencil2} from "react-icons/rx"
import {AiOutlineTable} from "react-icons/ai";

import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const { t } = useTranslation();

  function getItem(label, key, icon, children) {

    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem( t('Dashboard'), '1', <TbBrandSpeedtest />),
    getItem(t("Form"), '2', <RxPencil2 />),
    getItem(t("List"), 'sub1', <AiOutlineTable />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem(t('Team'), 'sub2', <FaAvianex />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem(t('Files'), '9', <FaAvianex />),
  ];

  return (
    <Sider theme={'light'}>
      <Menu items={items}>
      </Menu>
    </Sider>
  )
}