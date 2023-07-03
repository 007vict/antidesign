import React from "react";
import styles from "./HeaderCustom.module.css";
import {Header} from "antd/es/layout/layout";
import {Space, Typography} from "antd";
import {FaAvianex} from "react-icons/fa";

export const HeaderCustom = () => {
  return (
    <Header className={styles.header}>
      <Space align={'center'} style={{height: '100%'}}>
        <FaAvianex size={32} style={{ alignItems: 'center', display: 'flex'}}/>
        <Typography level={1}> Ant Design Pro</Typography>
      </Space>

    </Header>
  )
}

// export HeaderCustom;