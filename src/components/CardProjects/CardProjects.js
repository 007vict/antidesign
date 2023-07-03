import {Avatar, Card, Space, Typography} from "antd";
import React from "react";
import { useTranslation } from 'react-i18next'
export const CardProjects = () => {
  const {t} = useTranslation()
  const gridStyle = {
    width: '33,3%',
  };
  return (
    <Card title={t('Projects')} bordered={false} style={{borderRadius: 0}} >
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
            title="Alipay"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />}
            title="Angular"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" />}
            title="Ant Design"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />}
            title="Ant Design Pro"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" />}
            title="Bootstrap"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Space direction={'vertical'}>
          <Card.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />}
            title="React"
          />
          <Typography.Text type={'secondary'}>This is the description</Typography.Text>
          <Typography.Link>More details...</Typography.Link>
        </Space>
      </Card.Grid>
    </Card>
  )
}