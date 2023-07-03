import {Card, Row, Col, Avatar, Space} from "antd";
import React from "react";

export const CardTeam = () => {
  return (
    <Card title={'Team'}>
      <Row>
        <Col span={12}>
          <Space direction={'vertical'} size={'large'}>
            <Card.Meta
              avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
              title={'Alipay'}
            />
            <Card.Meta
              avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" />}
              title={'Ant Design'}
            />
            <Card.Meta
              avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" />}
              title={'Bootstrap'}
            />
          </Space>
        </Col>
        <Col span={12}>
          <Space direction={'vertical'} size={'large'}>
            <Card.Meta
              avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />}
              title={'Angular'}
            />
            <Card.Meta
              avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />}
              title={'Ant Design Pro'}
            />
              <Card.Meta
                avatar={<Avatar size={'small'} src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />}
                title={'React'}
              />
          </Space>
        </Col>
      </Row>
    </Card>
  )
}