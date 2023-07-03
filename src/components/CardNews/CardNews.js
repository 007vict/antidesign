import {Avatar, ConfigProvider, List, Space, theme} from "antd";
import React from "react";

const { useToken } = theme;

export const CardNews = ({themeCustom}) => {
  const { token } = useToken();
  const styleList = {
    backgroundColor: token.colorBgContainer,
    border: 0,
  }
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <>
      <ConfigProvider theme={{
        token: {
          colorBgContainer: themeCustom === false ? '#fff' : '#000'
        }
      }}>
        <Space direction={'vertical'} size={'large'} style={{width: '100%', height: '100%'}}>
      <List
        size={'large'}
        bordered
        header={<h1>News</h1>}
        dataSource={data}
        style={styleList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={item}
              description="This is the description"
            />
          </List.Item>
        )}

      />
      <List
        style={styleList}
        size={'large'}
        itemLayout={'horizontal'}
        bordered
        header={<h1>News</h1>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{backgroundColor: token.colorBgContainer}}>
            <List.Item.Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={item}
              description="This is the description"
            />
          </List.Item>
        )}
      />
    </Space>
      </ConfigProvider>
    </>
  )
}