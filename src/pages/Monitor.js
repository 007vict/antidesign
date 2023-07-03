import React from 'react';
import styles from './Monitor.module.css'
import {Layout, Col, Row, Space} from 'antd';

import {HeaderCustom} from '../components/Header/HeaderCustom'
import {Sidebar} from "../components/Sidebar/Sidebar";
import {CardProjects} from "../components/CardProjects/CardProjects";
import {CardNews} from "../components/CardNews/CardNews";
import {CardLinkOperations} from "../components/CardLinkOperations/CardLinkOperations";
import {CardCanvas} from "../components/CardCanvas/CardCanvas";
import {CardTeam} from "../components/CardTeam/CardTeam";

const {Content } = Layout
const Monitor = ({themeCustom}) => {
  return (
    <Layout className={styles.wrapper}>
      <HeaderCustom />
      <Layout hasSider>
        <Sidebar />
        <Content>
          <Row  style={{padding: 24, backgroundColor: "#f0f0f0"}}>
            <Col sm={{span: 24}} lg={{span:16}} style={{
              paddingRight: 12,
              borderRadius: 0
            }} >
              <Space direction={'vertical'} size={'large'} style={{display: "flex"}}>
                <CardProjects />
                <CardNews themeCustom={themeCustom}/>
              </Space>
            </Col>
            <Col sm={{span: 24}} lg={{span:8}}
              style={{
                paddingLeft: 12,
                borderRadius: 0
              }}
            >
              <Space direction={'vertical'} size={'large'} style={{display: "flex"}} >
                <CardLinkOperations />
                <CardCanvas />
                <CardTeam />
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
};

export default Monitor;